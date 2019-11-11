import { TestBed } from '@angular/core/testing';

import { FilmyService } from './filmy.service';

describe('FilmyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmyService = TestBed.get(FilmyService);
    expect(service).toBeTruthy();
  });
});
