import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
    <label>Enter Keg Name:</label>
    <input #newName><br>
    <label>Enter Keg brand:</label>
    <input #newBrand><br>
    <label>Price per Pint?:</label>
    <input #newPrice><br>
    <label>Enter Keg ABV:</label>
    <input #newABV><br>
    <label>Enter Keg Type:</label>
    <input #newType><br>
    <button class="btn btn-default" (click)="submitForm(
      newName.value,
      newBrand.value,
      newPrice.value,
      newABV.value,
      newType.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newABV.value='';
      newType.value='';">Submit</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, ABV: number,
  typeOfBev: string) {
    var newKeg: Keg = new Keg(name, brand, price, ABV, typeOfBev);
    this.newKegSender.emit(newKeg);
  }
}
