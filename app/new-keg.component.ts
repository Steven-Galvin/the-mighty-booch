import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
    <label>Enter Keg Name:</label>
    <input class="form-control" #newName><br>
    <label>Enter Keg brand:</label>
    <input class="form-control" #newBrand><br>
    <label>Price per Pint?:</label>
    <input class="form-control" #newPrice><br>
    <label>Enter Keg ABV:</label>
    <input class="form-control" #newABV><br>
    <label>Enter Keg Type:</label>
    <input class="form-control" #newType><br>
    <button class="btn btn-sm btn-default" (click)="submitForm(
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
      <button class="btn btn-sm btn-default" (click)="kegHide()">Hide</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  @Output() kegFormHide = new EventEmitter();

  submitForm(name: string, brand: string, price: number, ABV: number,
  typeOfBev: string) {
    var newKeg: Keg = new Keg(name, brand, price, ABV, typeOfBev);
    this.newKegSender.emit(newKeg);
  }

  kegHide() {
    this.kegFormHide.emit();
  }
}
