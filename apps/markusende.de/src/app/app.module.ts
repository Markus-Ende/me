import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule,
    MenuModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
