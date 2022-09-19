import { Injectable } from '@angular/core';
import Mgrs, { LatLon } from 'geodesy/mgrs.js';
import LatLon_Utm from 'geodesy/mgrs.js';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  coordinates: Mgrs[] = [];

  constructor() { }

  addToCoordinates(coordinate: Mgrs) {
    this.coordinates.push(coordinate);
  }

  getCoordinates(index: number) {
    return this.coordinates[index].toString();
  }

  getLastCoordinates() {
      return this.coordinates[this.coordinates.length - 1].toUtm().toLatLon();
      //.toString('dms', 2)
  }

  getLat() {
    return this.getLastCoordinates().lat;
  }

  getLon() {
    return this.getLastCoordinates().lon;
  }

  clearCoordinates() {
    this.coordinates = [];
    return this.coordinates;
  }
}
