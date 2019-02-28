//GLOBALS https://visme.co/blog/website-color-schemes/
const DEFAULTCOLOR = "#3388ff";
const HOVERCOLOR   = "#4056A1";
const OPENCOLOR   = "#D79922";

//python -m SimpleHTTPServer 8000
//------------Initializes Map-------------------------------------------------//
var map = L.Wrld.map("map", "3f0363abe27ca1f20d7b7f1e6fec5b6b", {
  center: [41.4843, -81.9332],
  zoom: 17,
  // See https://github.com/wrld3d/wrld-themes for the current theme options.
  //environmentThemesManifest: "https://webgl-cdn1.eegeo.com/mobile-themes-new/v1147/scifi/web.manifest.bin"
});


///--------------Precahing prompt changes button to success when completed----//
//https://icons8.com/icon/pack/free-icons/color
function precache() {
  $("#icons").attr("src","icons/icons8-settings-48.png");
  $("#precache").html("Running");
  var precacheCompleteCallback = function(precacheResult) {
    if (precacheResult.getSucceeded()) {
      $("#icons").attr("src","icons/icons8-checked-48.png");
        $("#precache").text("Success");
    } else {
      $("#precache img").attr("src","icons/icons8-checked-48.png");
        $("#precache").text("Failed");

    }
  };
  map.precacheWithDetailedResult(
    [41.502405, -81.673895],
    10000,
    precacheCompleteCallback);
};

//-------------Center map on Cleveland----------------------------------------//
//https://icons8.com/icon/pack/maps/small
function centerCleveland(){
  map.setView([41.502405, -81.673895],13);
}

//-------------READ JSON OBJ IN USED FOR DEBUGGING----------------------------//
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
readTextFile("secondDataSet33.json");
//-------------------^^NOT FOR PRODUCTION^^-----------------------------------//

var data = JSON.parse(tempData);
//JSON data formatted [JSONOBJ].geometry.coordinates[y], x id of coordinates 0-4,
// y is outer bounds, last value of coordinates is a repeat.
// Need to swap coordinates values as they are in wrong format for Leaflet
for(var i = 0; i < data.length; i++){
    //iterates over LocData entries
    for(var k = 0; k < (data[i].geometry.coordinates[0].length)-1;k++){
        //iterates over LocData.coordinates entries except last value
        //Swaps longitude and Latitude
        var tempVal = data[i].geometry.coordinates[0][k][0];
        data[i].geometry.coordinates[0][k][0] = data[i].geometry.coordinates[0][k][1];
        data[i].geometry.coordinates[0][k][1] = tempVal;
    }
    data[i].geometry.coordinates[0] = data[i].geometry.coordinates[0].slice(0,-1);
}

//addPlot, adds plot specified in val into over map, does NOT add to map
//        overlay = overlay map
//        val= value used to identify json obj (id = #, json = index, $oid = string)
//        type = ("id","json","$oid")
function addPlot(overlay, val, type){
  var gate = false;
  if(type == "id"){
    for(var i = 0; i < data.length;i++){
      var name = type + String(val);
      if(data[i].id == val){
        gate = true;
        overlay[name] = L.polygon(data[i].geometry.coordinates);
        overlay[name].bindPopup(
          "<p class='popup'><b>Address:</b>  <span>"
          + data[i].properties.PAR_ADDR + " " + data[i].properties.PAR_STREET + " "
          + data[i].properties.PAR_SUFFIX                           + "</span><br>" +
          "<b>City:      </b><span>" + data[i].properties.PAR_CITY + "</span><br>" +
          "<b>Zip:       </b><span>" + data[i].properties.PAR_ZIP  + "</span><br>" +
          "<b>Parcel ID: </b><span>" + data[i].properties.PARCEL_ID + "</span><br>" +
          "<b>Type:      </b><span>" + data[i].properties.PARCEL_TYP + "</span><br>" +
          "<b>Features:  </b><span>" + data[i].properties.TAX_LUC_DE + "</span><br></p>"
        );
        //Popup on click effects
        overlay[name].on("popupopen",function(){
          overlay[name].setStyle({
            fillColor: OPENCOLOR,
            color: OPENCOLOR,
            fillOpacity: 0.8
        });
        });

        overlay[name].on("popupclose",function(){
          overlay[name].setStyle({
            fillColor: DEFAULTCOLOR,
            color: DEFAULTCOLOR,
            fillOpacity: 0.5
        });
        });

        //Hover effect
        overlay[name].on("mouseover",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: HOVERCOLOR,
              color: HOVERCOLOR,
              fillOpacity: 0.5
            });
          }
          });
        overlay[name].on("mouseout",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: DEFAULTCOLOR,
              color: DEFAULTCOLOR,
              fillOpacity: 0.5
            });
          }
        });
        break;
      }
    }
  }else if(type =="json"){
        i = val;
        name = type + String(i);
        gate = true;
        overlay[name] = L.polygon(data[i].geometry.coordinates);
        overlay[name].bindPopup(
          "<p class='popup'><b>Address:</b>  <span>"
          + data[i].properties.PAR_ADDR + " " + data[i].properties.PAR_STREET + " "
          + data[i].properties.PAR_SUFFIX                           + "</span><br>" +
          "<b>City:      </b><span>" + data[i].properties.PAR_CITY + "</span><br>" +
          "<b>Zip:       </b><span>" + data[i].properties.PAR_ZIP  + "</span><br>" +
          "<b>Parcel ID: </b><span>" + data[i].properties.PARCEL_ID + "</span><br>" +
          "<b>Type:      </b><span>" + data[i].properties.PARCEL_TYP + "</span><br>" +
          "<b>Features:  </b><span>" + data[i].properties.TAX_LUC_DE + "</span><br></p>"
        );
        //Popup on click effects
        overlay[name].on("popupopen",function(){
          overlay[name].setStyle({
            fillColor: OPENCOLOR,
            color: OPENCOLOR,
            fillOpacity: 0.8
        });
        });

        overlay[name].on("popupclose",function(){
          overlay[name].setStyle({
            fillColor: DEFAULTCOLOR,
            color: DEFAULTCOLOR,
            fillOpacity: 0.5
        });
        });

        //Hover effect
        overlay[name].on("mouseover",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: HOVERCOLOR,
              color: HOVERCOLOR,
              fillOpacity: 0.5
            });
          }
          });
        overlay[name].on("mouseout",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: DEFAULTCOLOR,
              color: DEFAULTCOLOR,
              fillOpacity: 0.5
            });
          }
        });
  }else if(type =="$oid"){
    for(i = 0; i < data.length;i++){
      name = String(val);
      if(data[i]._id.$oid == val){
        gate = true;
        overlay[name] = L.polygon(data[i].geometry.coordinates);
        overlay[name].bindPopup(
          "<p class='popup'><b>Address:</b>  <span>"
          + data[i].properties.PAR_ADDR + " " + data[i].properties.PAR_STREET + " "
          + data[i].properties.PAR_SUFFIX                           + "</span><br>" +
          "<b>City:      </b><span>" + data[i].properties.PAR_CITY + "</span><br>" +
          "<b>Zip:       </b><span>" + data[i].properties.PAR_ZIP  + "</span><br>" +
          "<b>Parcel ID: </b><span>" + data[i].properties.PARCEL_ID + "</span><br>" +
          "<b>Type:      </b><span>" + data[i].properties.PARCEL_TYP + "</span><br>" +
          "<b>Features:  </b><span>" + data[i].properties.TAX_LUC_DE + "</span><br></p>"
        );
        //Popup on click effects
        overlay[name].on("popupopen",function(){
          overlay[name].setStyle({
            fillColor: OPENCOLOR,
            color: OPENCOLOR,
            fillOpacity: 0.8
        });
        });

        overlay[name].on("popupclose",function(){
          overlay[name].setStyle({
            fillColor: DEFAULTCOLOR,
            color: DEFAULTCOLOR,
            fillOpacity: 0.5
        });
        });

        //Hover effect
        overlay[name].on("mouseover",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: HOVERCOLOR,
              color: HOVERCOLOR,
              fillOpacity: 0.5
            });
          }
          });
        overlay[name].on("mouseout",function(){
          if(!(this.getPopup().isOpen())){
            overlay[name].setStyle({
              fillColor: DEFAULTCOLOR,
              color: DEFAULTCOLOR,
              fillOpacity: 0.5
            });
          }
        });
        break;
      }
    }
  }else{
    console.log(val + " of " + type + " not found.");
  }
}//ENDADDPLOT

//Example usage
var over = {}; //Object Literal containing the plots to add to map,
var over2 = {};
addPlot(over,0,"id"); //Example ID
addPlot(over2,1,"json"); //Example JSON
addPlot(over,"5be75d6ac93fa7a8709c098d","$oid"); //Example $oid
var overArr = [];
overArr.push(over)
overArr.push(over2);
//END EXAMPLE USAGE

//Adds top left controller for layers
//L.control.layers(null,over).addTo(map);
//Adds controls, scale and zoom controls
L.control.scale().addTo(map);
L.control.zoom().addTo(map);

$(document).ready(function(){
    $("#control-sm").click(function(){
        showControl(3);
    });
});

//Creates Control box within map html
function showControl(numberOfOverlays){
  $("#control-sm").hide();
  $("#control").css("z-index","2");
  addLayersHTML(numberOfOverlays);
}

//Adds check box
function addLayersHTML(numberOfOverlays){
  for(var i = 0; i < numberOfOverlays;i++){
    $("#control").append(
      '<input type="checkbox" onclick="toggleLayer()"><span>'
      + "Layer1" + '</span>' + ' <br>');
    }
}

//adds layer functionality to checkbox item
function toggleLayer(){
  var checkBox = $("#control input");
  console.log(checkBox[0].checked);
  //console.log("toggleLayer Called");
  if(checkBox[0].checked == true){
    //console.log("Checked!");
    for(var i = 0; i < Object.values(over).length; i++){
      Object.values(over)[i].addTo(map);
    }
  }else{
    //console.log("Not Checked");
    for(var j = 0; j < Object.values(over).length; j++){
      Object.values(over)[j].remove();
    }
  }
}


// call real estate people
//  Events
//   (DONE)Center On Cleveland
//   (DONE)Precache
//   Checkboxes for Search Query
//   Advanced options?
//   (DONE)ParcelID, Address, City, Zip, Type of lot, Features


// https://www.wrld3d.com/wrld.js/latest/docs/leaflet/L.LayerGroup/


// Remove specific plots (p: JSON obj or ID)
//function removePlots(p, <layer> layer)
// Layer optional specifies the layer to remove it from, otherwise removed from all
// removeLayer(layer) removes a layer of plots
// addLayer(layer)  adds layer of plots
// removeAllLayers()  removes all active layers
// addMultipleLayers(layer[ ]) adds layers when given array of layers
//Browser Support

//map.on("initialstreamingcomplete", onInitialStreamingComplete);
