import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxDemosComponent } from './components/ngx-demos/ngx-demos.component';
import { routing } from './routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxDemosComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
