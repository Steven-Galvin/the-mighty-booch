import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Mighty Booch</h1>
    <button (click)="kegFormShow()">Add A Keg</button>
    <ul>
      <li *ngFor="let currentKeg of masterKegList">{{currentKeg.name}}
      <button (click)="editKeg(currentKeg)">Edit!</button>
      </li>
    </ul>

    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEdit()"></edit-keg>
    <new-keg *ngIf="kegForm === true" (newKegSender)="addKeg($event)"></new-keg>

  </div>
  `
})

export class AppComponent {
  kegForm: boolean = false;

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Pain Juice', 'Juice Boys', '$3.00', '17%', 'Cider'),
    new Keg('Pain Juice', 'Juice Boys', '$3.00', '17%', 'Cider')
  ];

  editKeg(kegToEdit: Keg) {
    this.selectedKeg = kegToEdit;
    console.log(this.selectedKeg);
  }

  finishedEdit() {
    this.selectedKeg = null;
  }

  addKeg(newKeg) {
    this.kegForm = false;
    this.masterKegList.push(newKeg);
  }

  kegFormShow(){
    this.kegForm = true;
  }
}
