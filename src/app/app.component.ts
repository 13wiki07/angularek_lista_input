import { Component } from '@angular/core';
import { Miejsca } from './miejsca';
import { Miejsce } from './miejsce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apka';

  miejscaWyswietlane: Miejsce [] = Miejsca.miejsca;
  indeksMiejsca: number = 0;
  wybraneMiejsce: Miejsce = this.miejscaWyswietlane[0];
  // elementy: string[] = [
  //   "London",
  //   "Berlin",
  //   "Paris"
  // ];

}
