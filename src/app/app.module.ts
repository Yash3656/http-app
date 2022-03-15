import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHttpsComponent } from './new-https/new-https.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewHttpsComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
