import { Component, OnInit } from '@angular/core';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';
import { error } from 'util';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmy: Film[];
  wiadomosc: String = '';

  constructor(private fS: FilmyService) { }

  ngOnInit() {
    this.fS.wszystkieFilmy().subscribe(
      (dane) => {
        this.filmy = dane;
      },
      (error) => {
        this.wiadomosc = 'Wystąpił błąd serwera. Sporóbuj później.';
        console.log(error);
      }

    );
    console.table(this.filmy);
  }

}
