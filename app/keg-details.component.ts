import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-details',
  template: `
  <hr>
  <h3>{{childSelectedKeg.name}} Details:</h3>
  <h5>Brand: {{childSelectedKeg.brand}}</h5>
  <h5>Price per pint: &#36;{{childSelectedKeg.price}}.00</h5>
  <h5>ABV: {{childSelectedKeg.ABV}}%</h5>
  <h5>Type of Beverage: {{childSelectedKeg.typeOfBev}}</h5>
  <h5>Volume of keg: {{childSelectedKeg.volume}} pints remaining</h5>
  <button class="btn btn-sm btn-default" (click)="doneButtonClicked()">Hide</button><hr>
  How Much We Drinkin'?<br>
  <button (click)="drank()" class="btn btn-sm btn-default">Drink A Pint</button>
  <button (click)="drink()" class="btn btn-sm btn-default">Drink A Growler</button>
  <button (click)="drunk()" class="btn btn-sm btn-default">Drink A Large Growler</button>
  `
})

export class KegDetailsComponent {
  @Input() childSelectedKeg: Keg;

  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() doneDrankIt = new EventEmitter();
  @Output() doneDrinkIt = new EventEmitter();
  @Output() doneDrunkIt = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  drank() {
    this.doneDrankIt.emit();
  }

  drink() {
    this.doneDrinkIt.emit();
  }

  drunk() {
    this.doneDrunkIt.emit();
  }

}
