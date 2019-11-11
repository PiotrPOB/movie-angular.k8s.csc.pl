import { Injectable } from '@angular/core';
import { Film } from './modele/film';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    { id: 0, tytul: 'Avatar', rok: 2009, opis: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.', link: 'https://www.youtube.com/watch?v=6ziBFh3V1aM' },
    { id: 1, tytul: 'Terminator3', rok: 2003, opis: 'T-800 zostaje wysłany w przeszłość, by chronić Johna Connora i jego przyjaciółkę Kate Brewster. Ich przeciwnikiem jest cyborg T-X.', link: 'https://www.youtube.com/watch?v=zdYYI_2Tudg' },
    { id: 2, tytul: 'PulpFiction', rok: 1994, opis: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.', link: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY' },
    { id: 3, tytul: 'VanillaSky', rok: 2001, opis: 'Milioner zadurza się w dziewczynie przyjaciela. Tym samym ściąga na siebie gniew swojej dotychczasowej kochanki.', link: 'https://www.youtube.com/watch?v=k09OX40NLUw' }
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
