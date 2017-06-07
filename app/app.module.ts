import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent, NewKegComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
