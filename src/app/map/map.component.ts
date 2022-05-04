import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit  {

  // @ts-ignore
  private map:L.Map;
  arr:any[]=[];
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.map.addEventListener("click", (e:any) => {
      debugger;
      if (e.latlng) {
        const { latlng } = e;
        this.arr.push(latlng);
      }
      console.dir(e);
    });

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
    create() {
    debugger
  }

}
