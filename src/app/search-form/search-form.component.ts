import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoordinateService } from '../coordinate.service';
import Mgrs, { LatLon } from 'geodesy/mgrs.js';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(
    private coordinateService: CoordinateService
  ) { }

  ngOnInit(): void {
  }

  handleSearch(input:string) {
    try {
      let mgrs = Mgrs.parse(input);
      this.coordinateService.addToCoordinates(mgrs);
    } catch (error) {
      console.log("The MGRS Coordinate is invalid.", error);
    }
  }

}
