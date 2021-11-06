import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheaderComponent } from './nse/mainheader/mainheader.component';
import { AppheaderComponent } from './nse/appheader/appheader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    AppheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
