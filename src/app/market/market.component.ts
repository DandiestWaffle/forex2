import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {DataSource} from '@angular/cdk/table';
import {Quote} from '../finance-domain/Quote';
import {AccountComponent} from '../account/account.component';
import {isNull, isNullOrUndefined, isUndefined} from 'util';
import {CurrencyPair} from '../finance-domain/CurrencyPair';
import {RandomMarketManager} from '../finance-domain/RandomMarketManager';
import {TradeManager} from '../finance-domain/TradeManager';
import {SpotTrade} from '../finance-domain/SpotTrade';
import {BUY} from '../finance-domain/Side';
import {CAPTURED} from '../finance-domain/TradeStatus';

@Component({
  selector: 'app-market-component',
  styleUrls: ['market.component.css'],
  templateUrl: 'market.component.html',
})

export class MarketComponent implements OnInit {
  displayedColumns = ['currencyPair', 'bid', 'ask', 'timestamp'];
  private marketSource: MarketDataSource | null;

  @ViewChild('yourCurrencyPair') yourCurrencyPairComponent: ElementRef;
  @ViewChild('yourAccount') yourAccountComponent: AccountComponent;
  @ViewChild('yourQuantity') yourQuantityComponent: ElementRef;

  constructor(private marketManager: RandomMarketManager, private tradeManager: TradeManager) {
  }

  ngOnInit() {
    this.marketSource = new MarketDataSource(this.marketManager);

    Observable.fromEvent(this.yourCurrencyPairComponent.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.marketSource) {
          return;
        }
        this.marketSource.filter = this.yourCurrencyPairComponent.nativeElement.value;
      });
  }

  onBuyButtonClicked(): void {
    this.buy(
      this.yourAccountComponent.get(),
      this.yourCurrencyPairComponent.nativeElement.value,
      this.yourQuantityComponent.nativeElement.value);
  }

  private buy(account: string, pairString: string, quantityString: string): void {
    if (isUndefined(account) || isNull(account) || account === '') {
      console.log('Invalid account');
      return;
    }

    let currencyPair: CurrencyPair;
    if (isUndefined(pairString) || isNull(pairString) || pairString === '') {
      console.log('Invalid pairString');
      return;
    }

    currencyPair = CurrencyPair.lookup(pairString);
    if (isNullOrUndefined(currencyPair)) {
      console.log('Invalid currency pairString');
      return;
    }

    if (isUndefined(quantityString) || isNull(quantityString) || quantityString === '') {
      console.log('Invalid quantityString');
      return;
    }

    const quantity: number = parseFloat(quantityString);
    if (quantity > 0) {

    } else {
      console.log('Invalid qty');
      return;
    }

    const quote: Quote = this.marketManager.getQuote(currencyPair);
    if (isNullOrUndefined(quote)) {
      console.log('No quote for ' + currencyPair);
      return;
    }

    this.doBuy(account, currencyPair, quantity, quote);
  }

  doBuy(account: string, currencyPair: CurrencyPair, quantity: number, quote: Quote): void {
    console.log('BUY ' + account + ' ' + currencyPair + ' ' + quantity);

    const trade: SpotTrade = {
      currencyPair: currencyPair,
      account: account,
      quantity: quantity,
      rate: quote.bid,
      side: BUY,
      tradeDate: new Date(),
      settlementDate: new Date(), // todo
      status: CAPTURED
    };

    // todo go to order manager first

    this.tradeManager.add(trade);
  }

  onSellButtonClicked(): void {
    console.log('Sell');
  }
}

export class MarketDataSource extends DataSource<any> {
  private filterChange = new BehaviorSubject('');

  constructor(private marketManager: RandomMarketManager) {
    super();
  }

  get filter(): string {
    return this.filterChange.value;
  }

  set filter(filter: string) {
    this.filterChange.next(filter);
  }


  connect(): Observable<Quote[]> {
    const displayDataChanges = [
      this.marketManager.asMarketObservable(),
      this.filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.marketManager.getMarket().slice().filter((quote: Quote) => {
        const theString: string = this.filter.trim().toLowerCase().replace('/', '');
        const aString: string = quote.currencyPair.toString().toLowerCase().replace('/', '');
        return aString.indexOf(theString) !== -1;
      });
    });
  }

  disconnect() {
  }
}
