import { Component, OnInit } from '@angular/core';
declare let L;
import * as $ from 'jquery';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        
        /*
        var map;
        var plotlist;
        var plotlayers=[];

        // set up the map
        map = new L.Map('map');
        // create the tile layer with correct attribution
        var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 25, attribution: osmAttrib});
        // start the map in first plot
        map.setView(new L.LatLng(41.404, -81.5471),10);
        map.addLayer(osm);
        */

    }
}
