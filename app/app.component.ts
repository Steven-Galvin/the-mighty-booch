import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Mighty Booch</h1>
    <ul>
      <li *ngFor="let currentKeg of masterKegList">{{currentKeg.name}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Pain Juice', 'Juice Boys', '$3.00', '17%', 'Cider')
  ];
}
