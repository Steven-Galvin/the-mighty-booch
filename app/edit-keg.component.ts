import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <hr>
      <h3>Edit {{childSelectedKeg.name}}</h3>
      <div>
        <label>Enter New Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.name"><br>
        <label>Enter New brand:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.brand"><br>
        <label>New Price per Pint?:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.price"><br>
        <label>Enter New ABV:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.ABV"><br>
        <label>Enter New Type:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.typeOfBev"><br>
        <button class="btn btn-sm btn-default" (click)="doneButtonClicked()">Submit</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
