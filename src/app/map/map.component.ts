import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
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
//   const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=$
    //@asymmetrik/ngx-leaflet
    //https://github.com/Asymmetrik/ngx-leaflet#extensions
    //https://www.mylpg.eu/lpg-station-route-planner/
    tiles.addTo(this.map);
    this.map.addEventListener("click", (e:any) => {
      debugger;
      if (e.latlng) {
        const { latlng } = e;
        debugger
        const {lat,lng}=latlng;
        this.check(latlng);
        this.arr.push(latlng);
      }
      console.dir(e);
    });

  }

  constructor(private http:HttpClient) { }


  ngAfterViewInit(): void {
    this.initMap();
    const cmarker = new L.CircleMarker(L.latLng(65, 65)).addTo(this.map);
  }
    create() {
     // return this.httpClient.get('url');
    debugger
  }
check(latlng:any)
{
  const {lat,lng}=latlng;
const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
  this.http.get(url).subscribe(d=>{
debugger;
console.dir(d);

  });
}
}
