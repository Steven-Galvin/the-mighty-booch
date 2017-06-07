import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Mighty Booch</h1>
    <button class="btn btn-sm btn-default" (click)="kegFormShow()">Add A Keg</button>

    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="lessThanTen">Near Empty Kegs</option>
      <option value="death">Medical grade</option>
    </select>

    <ul>
      <li id="kegs" [class]="priceColor(currentKeg)"(click)="selectedKegDetails(currentKeg)" *ngFor="let currentKeg of masterKegList | lowvolume:filterKeg">{{currentKeg.name}}
      <button class="btn btn-sm btn-default" (click)="editKeg(currentKeg)">Edit!</button>
      </li>
    </ul>

    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEdit()"></edit-keg>
    <new-keg *ngIf="kegForm === true" (newKegSender)="addKeg($event)"></new-keg>

    <keg-details
      *ngIf="kegDetails"
      [childSelectedKeg]="kegDetails" (doneButtonClickedSender)="finishedEdit()"
      (doneDrankIt)="drankIt()"></keg-details>
  </div>
  `
})

export class AppComponent {
  kegForm: boolean = false;

  selectedKeg = null;
  kegDetails = null;
  filterKeg: string = "allKegs";

  masterKegList: Keg[] = [
    new Keg('Pain Juice', 'Juice Boys', 3, 17, 'Beer'),
    new Keg('Power THIRST', 'Picnic Face', 5, 50, 'Cider')
  ];

  onChange(menuOption) {
    this.filterKeg = menuOption
  }

  editKeg(kegToEdit: Keg) {
    this.selectedKeg = kegToEdit;
  }

  finishedEdit() {
    this.selectedKeg = null;
    this.kegDetails = null;
  }

  addKeg(newKeg) {
    this.kegForm = false;
    this.masterKegList.push(newKeg);
  }

  drankIt() {
    this.kegDetails.volume -= 1;
  }

  selectedKegDetails(kegToView: Keg) {
    this.kegDetails = kegToView;
  }

  kegFormShow(){
    this.kegForm = true;
  }

  priceColor(keg) {
    if(keg.price > 4) {
      return "finer-things"
    } else {
      return "dollar-store"
    }
  }
}
