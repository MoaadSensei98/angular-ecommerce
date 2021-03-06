import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EuroCurrencyPipe } from './euro-currency.pipe';
import { HighlightDirective } from './highlight.directive';
import { TooltipDirective } from './tooltip.directive';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    EuroCurrencyPipe,
    HighlightDirective,
    TooltipDirective,
    ProductsPageComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
