import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div [class]="checkDrunkLevel()" id="theWholeThing" [ngStyle]="{'filter': 'blur(' + blurNum + 'px)'}">
    <div class="jumbotron">
      <div class="container">
      <h1>The Mighty Booch</h1>
      </div>
    </div>
    <div class="container">
    <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="lessThanTen">Near Empty Kegs</option>
    <option value="death">Medical grade</option>
    </select>
      <div class="row">
        <div class="col-md-8">
          <ul>
            <li id="kegs" [class]="priceColor(currentKeg)"(click)="selectedKegDetails(currentKeg)" *ngFor="let currentKeg of masterKegList | lowvolume:filterKeg">
              <div class="row">
                <div class="col-md-10">
                  <h5>{{currentKeg.name}}</h5>
                </div>
                <div class="col-md-2">
                  <button type="submit" class="kegButton" (click)="editKeg(currentKeg)"><img src="/edit.png"/></button>
                </div>
              </div>
            </li>
          </ul>

        </div>
        <div class="col-md-3" style="border-left: 1px solid #ccc; border-bottom: 1px solid #ccc; padding-bottom: 8px;"><br>
          <button class="btn btn-sm btn-default" (click)="kegFormShow()">Add A Keg</button>

          <new-keg *ngIf="kegForm === true" (newKegSender)="addKeg($event)" (kegFormHide)="hideKeg()"></new-keg>
          <keg-details
          *ngIf="kegDetails"
          [childSelectedKeg]="kegDetails" (doneButtonClickedSender)="finishedEdit()"
          (doneDrankIt)="drankIt()">
          </keg-details>

          <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEdit()"></edit-keg>
        </div>
      </div>

    </div>
  </div>
  <div [innerHTML]="hassContent" class="hass">
  </div>
  <div [innerHTML]="drakeContent" class="drake">
  </div>
  <div [innerHTML]="kanyeContent" class="kanye">
  </div>
  `
})

export class AppComponent {
  kegForm: boolean = false;
  hassContent: string = "";
  drakeContent: string = "";
  kanyeContent: string = "";
  blurNum: number = 0;
  selectedKeg = null;
  kegDetails = null;
  filterKeg: string = "allKegs";

  masterKegList: Keg[] = [
    new Keg('Pain Juice', 'Juice Boys', 3, 17, 'Beer'),
    new Keg('Power THIRST', 'Picnic Face', 5, 50, 'Cider'),
    new Keg('Sissy Sauce', 'For men', 1, 9000, 'Water'),
    new Keg('Sissy Sauce', 'For men', 1, 9000, 'Water'),
    new Keg('Sissy Sauce', 'For men', 5, 9000, 'Water'),
    new Keg('Sissy Sauce', 'For men', 1, 9000, 'Water'),
    new Keg('Sissy Sauce', 'For men', 5, 9000, 'Water')
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

  hideKeg(){
    this.kegForm = false;
  }

  drankIt() {
    this.blurNum += 0.1;
    this.kegDetails.volume -= 1;
    if((this.blurNum * 10) >= 50){
      this.hassIt();
    }
    this.checkDrunkLevel();
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

  checkDrunkLevel() {
    if((this.blurNum * 10) >= 10) {
      return "shake-slow shake-constant"
    }
  }

  hassIt(){
    this.hassContent = "<div class='shake-crazy shake-constant'><img  src='/hass.png'/></div>";
    this.drakeContent = "<div class='shake-chunk shake-constant'><img  src='/drake.png'/></div>";
    this.kanyeContent = "<div ><img class='kanye-spin' src='/kanye.png'/></div>";

  }
}
