import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import PointerInteraction from 'ol/interaction/Pointer';
import { MapBrowserEvent } from 'ol';
import BaseEvent from 'ol/events/Event';
import Draw from 'ol/interaction/Draw';

@Component({
  selector: 'app-ol-test',
  templateUrl: './ol-test.component.html',
  styleUrls: ['./ol-test.component.scss']
})
export class OlTestComponent implements OnInit {

  constructor() { }

    map!: Map;

  ngOnInit(): void {
    const source = new VectorSource();
    const layer = new VectorLayer({
  source: source,
});
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });

    this.map.addLayer(layer)
    const inter = new PointerInteraction({

      handleDownEvent: (e: MapBrowserEvent<any>) => {

        const er = e.coordinate;
        debugger;
        return true;
      }});
    this.map.addInteraction(inter)
    this.map.addInteraction(
  new Draw({
    type: 'Polygon',
    source: source,
  })
);
    // this.map.addEventListener('click', ((e) => {
    //   debugger;
    //   console.dir(e);
    //  // const er = e as MapBrowserEvent;
    //   //this.map.getEventCoordinate(e)
    // });
  }
  cl($event:MouseEvent) {
    const dt = this.map.getEventCoordinate($event);
    debugger
}
}
