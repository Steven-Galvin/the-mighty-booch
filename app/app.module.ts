import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { KegDetailsComponent } from './keg-details.component';
import { FormsModule }  from '@angular/forms';
import { LowVolumePipe } from './low-volume.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent, NewKegComponent, EditKegComponent, KegDetailsComponent, LowVolumePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
