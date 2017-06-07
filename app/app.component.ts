import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Mighty Booch</h1>
    <button (click)="kegFormShow()">Add A Keg</button>
    <ul>
      <li *ngFor="let currentKeg of masterKegList">{{currentKeg.name}}</li>
    </ul>


    <new-keg *ngIf="kegForm === true" (newKegSender)="addKeg($event)"></new-keg>

  </div>
  `
})

export class AppComponent {
  kegForm: boolean = false;

  masterKegList: Keg[] = [
    new Keg('Pain Juice', 'Juice Boys', '$3.00', '17%', 'Cider'),
    new Keg('Pain Juice', 'Juice Boys', '$3.00', '17%', 'Cider')
  ];

  addKeg(newKeg) {
    this.kegForm = false;
    this.masterKegList.push(newKeg);
  }

  kegFormShow(){
    this.kegForm = true;
  }
}
