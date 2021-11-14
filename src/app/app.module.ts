import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { StoreComponent } from './components/store/store.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainASideComponent } from './components/main-aside/main-aside.component';


// import * as loginjs from '../assets/js/login/login';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    StoreComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainASideComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
