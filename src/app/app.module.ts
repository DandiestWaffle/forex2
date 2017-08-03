import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {MarketComponent} from './market/market.component';
import {PositionComponent} from './position/position.component';
import {HistoryComponent} from './history/history.component';


import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  StyleModule
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarketService} from './market/market-service';
import {HttpModule} from '@angular/http';
import {AboutComponent} from './about/about.component';
import {AccountComponent} from './account/account.component';
import {CurrencyPairComponent} from "./currency-pair/currency-pair.component";

// todo rename this file to forex module

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent, PositionComponent, HistoryComponent, AboutComponent, AccountComponent, CurrencyPairComponent
  ],

  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    StyleModule
  ],

  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,


/*
    RouterModule.forRoot([
        {
          path: 'market',
          component: MarketComponent
        },
        {
          path: 'position',
          component: PositionComponent
        },
        {
          path: 'history',
          component: HistoryComponent
        },
        {
          path: 'about',
          component: AboutComponent
        }
      ]
    ),
*/




    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    StyleModule,

    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule {

  public onSelectTab(): void {
    console.log('Tab selected');
  }
}
