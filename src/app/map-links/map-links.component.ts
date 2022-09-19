import { Component, OnInit } from '@angular/core';
import { CoordinateService } from '../coordinate.service';


@Component({
  selector: 'app-map-links',
  templateUrl: './map-links.component.html',
  styleUrls: ['./map-links.component.scss']
})
export class MapLinksComponent implements OnInit {
  lat: number = this.coordinateService.getLat();
  lon: number = this.coordinateService.getLon();
  gMapsUrl: string | undefined;
  gEarthUrl: string | undefined;
  osmUrl: string | undefined;

  constructor(
    private coordinateService: CoordinateService
  ) { }

  ngOnInit(): void {
    /*
    * Google Maps URL Format
    *
    * no marker
    * https://www.google.com/maps/place/49.46800006494457,17.11514008755796
    *
    * with marker
    * https://www.google.com/maps/search/?api=1&query=36.26577,-92.54324
    *
    * with marker and satellite view (unsupported)
    * http://maps.google.com/maps?t=k&q=loc:47.5951518+-122.3316393
    *
    */
    let gMapsUrl = "https://www.google.com/maps/search/" + this.lat + "," + this.lon;

    /*
    * Google Earth URL Format
    *
    * no marker
    * https://earth.google.com/web/@51.52864165,-0.1016182,100000d
    *
    * with marker
    * https://earth.google.com/web/search/48.857419,2.294905/
    *
    */
    let gEartUrl = "https://earth.google.com/web/search/" + this.lat + "," + this.lon;

    /*
    * OpenStreetMap URL Format
    *
    * with marker
    * https://www.openstreetmap.org/?mlat=33.6203&mlon=-116.2518#map=9/33.6203/-116.2518
    *
    */
    let osmUrl = "https://www.openstreetmap.org/?layers=Y&mlat=" + this.lat + "&mlon=" + this.lon + "#map=13/" + this.lat + "/" + this.lon;
  }

}
