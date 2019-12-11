import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {

  film: Film;
  baseURL = 'http://127.0.0.1:8000';

  constructor(
    private route: ActivatedRoute, private fs: FilmyService, private location: Location) { }



  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id', id);
    this.fs.getFilm(Number(id)).subscribe(
      (dane) => {
        this.film = dane;
      },
      (error) => {
        console.log(error);
      }

    );
  }

  cofnij() {
    this.location.back();

  }

}
