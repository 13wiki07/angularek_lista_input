import { Component, Input, OnInit } from '@angular/core';
import { Miejsca } from '../miejsca';
import { Miejsce } from '../miejsce';

@Component({
  selector: 'app-lokalizacja',
  templateUrl: './lokalizacja.component.html',
  styleUrls: ['./lokalizacja.component.css']
})
export class LokalizacjaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() wybrany!: number;
  czyWidac: boolean = true;
  napis: string = "Ukryj";

  wybraneLokalizacje:Miejsce[] = Miejsca.miejsca;

  zwieksz(): void {
    this.wybraneLokalizacje[this.wybrany].setRankPlus();
  }

  zmniejsz(): void {
    this.wybraneLokalizacje[this.wybrany].setRankMinus();
  }

  zmien(): void {
    this.czyWidac = !this.czyWidac;
    if(this.czyWidac)
      this.napis = "Pokaż";
    if(this.czyWidac)
      this.napis = "Ukryj";
    }
}
