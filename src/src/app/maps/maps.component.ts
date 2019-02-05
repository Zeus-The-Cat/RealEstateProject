import { Component, OnInit } from '@angular/core';
import * as DATA from "./secondDataSet.json";
declare let L;
//Uses >> https://www.npmjs.com/package/@asymmetrik/angular2-leaflet
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }
 
  options = {
    
      layers: [
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      ],
      zoom: 15,
      center: L.latLng([41.4843,-81.9332])
  };
  layers = [

  ];
  ngOnInit() {
    
    var data = DATA.default;
    console.log("length "+data.length);
    console.log(data[0].geometry.coordinates[0]);
  }
  clearLayers(){
    this.layers = [];
  }
  itOverLocData(){
    var d = DATA.default
    
    var i;
    var swap;
    let temp = [];
    var j;
    for(j = 0; j < d.length;j++){
      temp = d[j].geometry.coordinates[0];
      for(i = 0;i < temp.length; i++){
        swap = temp[i][0];
        temp[i][0] = temp[i][1];
        temp[i][1] = swap;
      }
      this.layers.push(L.polygon(temp.slice(0,-1)));
    }
  }

}

//Need to follow steps below for this to work
//
//  add leaflet.css and images folder to assets
//  npm install leaflet npm install @asymmetrik/ngx-leaflet , npm install @types/leaflet
//  add to app.module.ts import { LeafletModule } from '@asymmetrik/ngx-leaflet'
//    imports: [ ..., LeafletModule.forRood()]
//FOR JSON imports
// include json-typings.d.ts in the src folder
//  declare module "*.json" {const value: any;export default value;}
// in maps.component.ts import * as startData from "./secondDataSet.json";
// Data set should be called secondDataSet.json should be in maps folder
