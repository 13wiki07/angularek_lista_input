import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(f: NgForm): void { // dodaj import NgForms
    console.log(f.value);
    console.log(this.indeksMiejsca);
  }
  // elementy: string[] = [
  //   "London",
  //   "Berlin",
  //   "Paris"
  // ];

}
