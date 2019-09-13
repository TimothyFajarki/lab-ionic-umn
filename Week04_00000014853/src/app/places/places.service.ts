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
      'https://rumahdijual.com/attachments/bsd/1259497d1400046522-parkland-avenue-apartment-bsd-tangerang-slide01-1-.jpg',
      500000000
    ),
  ];

  get places(){
    return [...this._places];
  }

  constructor() { }
}
