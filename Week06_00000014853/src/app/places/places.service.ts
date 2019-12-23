import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://d3p0bla3numw14.cloudfront.net/news-content/img/2017/01/16110710/perspektif-dan-stasiun-cisauk-OK.jpg',
      125000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://lh3.googleusercontent.com/-F5aY6yinaiA/TW_NzlRJppI/AAAAAAAAABo/fewLnztPeDU/s1600/apartment+building+designs...jpg',
      50000000
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
