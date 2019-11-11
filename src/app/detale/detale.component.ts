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

  constructor(
    private route: ActivatedRoute, private fs: FilmyService, private location: Location) { }



  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id', id);
    this.film = this.fs.getFilm(Number(id));
  }

  cofnij() {
    this.location.back();

  }

}
