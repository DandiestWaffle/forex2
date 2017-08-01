import {Component} from '@angular/core';

import {SpotTrade} from './SpotTrade';
import {USDJPY} from './CurrencyPair';
import {Side} from './Side';

const TRADES: SpotTrade[] = [
  {
    currencyPair: USDJPY,
    rate: 12.34,
    quantity: 100,
    side: Side.buy,
    account: 'Seletsky',
    tradeDate: new Date(),
    settlementDate: new Date()
  }
];

@Component({
  selector: 'app-history',
  template: '<h2>History</h2>' +
  '<ul>' +
  '<li *ngFor="let trade of trades">when: {{trade.timestamp}} ' +
  'what: {{trade.side}} {{trade.symbol}} - {{trade.account}} ' +
  'how much: {{trade.quantity}} ' +
  'price: {{trade.price}}</li>' +
  '</ul>'
})

export class HistoryComponent {
  trades: SpotTrade[] = TRADES;
}
