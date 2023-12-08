import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
