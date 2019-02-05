
  var map;
  var plotlist;
  var plotlayers=[];

  function initmap(){
  // set up the map
  map = new L.Map('map');
  // create the tile layer with correct attribution
  var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 25, attribution: osmAttrib});
  // start the map in first plot
  map.setView(new L.LatLng(41.404, -81.5471),10);
  map.addLayer(osm);
  }
  initmap();

  //Parsing Local JSON file
  var tempData;
  function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                tempData = allText;
            }
        }
    }
    rawFile.send(null);
  }
  readTextFile("LocationData.json");
  var data = JSON.parse(tempData);
    //JSON data formatted LocData[x].coordinates[y], x id of coordinates 0-4,
    //   y is outer bounds, last value of coordinates is a repeat.
    // Need to swap coordinates values as they are in wrong format for Leaflet
  var i;
  var k;
  var tempVal;
  for(i = 0; i < data.LocData.length; i++){
      //iterates over LocData entries
      for(k = 0; k < data.LocData[i].coordinates.length-1;k++){
          //iterates over LocData.coordinates entries except last value
          //Swaps longitude and Latitude
          tempVal = data.LocData[i].coordinates[k][0];
          data.LocData[i].coordinates[k][0] = data.LocData[i].coordinates[k][1];
          data.LocData[i].coordinates[k][1] = tempVal;
      }
  }
  //Adding markers
  var marker;
  for(i = 0; i < data.LocData.length;i++){
    marker = L.marker(data.LocData[i].coordinates[0]).addTo(map);
  }
  // //Adding circle
  // var circle = L.circle([51.508, -0.11], {
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  // }).addTo(map);

  //Adding Polygons
  var polygon;
  for(i =0; i < data.LocData.length; i++){
      //slice is used as the last coordinate is a repeat, causing issues with polygon
      polygon = L.polygon(data.LocData[i].coordinates.slice(0,-1)).addTo(map);
      polygon.bindPopup(data.LocData[i].coordinates[0]);
  }

  // //Popups
  // marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
  // circle.bindPopup("I am a circle.");
  // polygon.bindPopup("I am a polygon.");
  // //Popups as layers
  // var popup = L.popup()
  //     .setLatLng([51.5, -0.09])
  //     .setContent("I am a standalone popup.")
  //     .openOn(map);
