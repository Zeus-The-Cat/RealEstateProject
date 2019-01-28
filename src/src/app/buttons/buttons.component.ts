import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as DATA from "../maps/secondDataSet.json";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit() {
    
    //console.log("testong json before");
    var data = DATA.default;
    //$.getJSON( "C:\\Users\\joel\\Desktop\\483JSON\\nodejsfiles\\RealEstate\\RealEstate\\src\\app\\maps\\secondDataSet.json", function(data) {
    //$.getJSON("loop.json", function(date)
    //var data = null;    
    //console.log("testing json");
        var propNames = Object.keys(data[0].properties);
        var x = document.getElementById("mytable");
        var y = document.getElementById("mytable2");
        var n;
        var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
    
                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
        };
        n = getUrlParameter("radio1");
        
        $.ajax({
            type: 'GET',
            //url: "localhost:4200",
            complete: function(data) {
               console.log("data found from server");
              //console.log((data));
              //console.log(JSON.stringify(data));
              console.log(data[0].id);
            }
        });
        $.get('http://localhost:4200', {mydata: 'content'}, function(response) {
            console.log(data[0].id);
            console.log("testing2");
        });
        
        $.post('http://localhost:4200/', function(response) {
                //console.log(JSON.stringify(response));
                //console.log(response[0].id);
                console.log("testing5");
                //data = JSON.stringify(response);
                //data = response;
                console.log(response[0].id);
        });
        
        
        //var retrievedObject = localStorage.getItem('testObject');
        //console.log('Value of retrievedObject: ' + retrievedObject);
        ///console.log(data.length);
        //console.log("n: "+n); //n is not changing values
        //console.log(Math.min(data.length, n));
        if (data.length == 0) {
            document.getElementById('resultsReturned').innerHTML = "Either nothing was entered or no matches returned";
        }
        var tr;
        tr = $('<tr/>');
        tr.append("<th>ID</th>");
        tr.append("<th>Mail City</th>");
        tr.append("<th>Mail Address</th>");
        tr.append("<th>Mail Zip</th>");
        tr.append("<th>Parcel Pin</th>");
        tr.append("<th>Parcel ID</th>");
        tr.append("<th>Grantee</th>");
        $(x).append(tr);
        //small input
        for (var i = 0; i < Math.min(data.length, n); i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].id + "</td>");
            tr.append("<td>" + data[i].properties.MAIL_CITY + "</td>");
            tr.append("<td>" + data[i].properties.MAIL_ADDR_ + "</td>");
            tr.append("<td>" + data[i].properties.MAIL_ZIP + "</td>");
            tr.append("<td>" + data[i].properties.PARCELPIN + "</td>");
            tr.append("<td>" + data[i].properties.PARCEL_ID + "</td>");
            tr.append("<td>" + data[i].properties.GRANTEE + "</td>");
            $(x).append(tr);
        }
        tr = $('<tr/>');
        tr.append("<th>ID</th>");
        tr.append("<th>Type</th>");
        for (var k = 0; k < 72; k++) {
            tr.append("<th>"+propNames[k] + "</th>");
        }
        $(y).append(tr);
        //large input
        for (var i = 0; i < Math.min(data.length, n); i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].id + "</td>");
            tr.append("<td>" + data[i].type + "</td>");
            for (var k = 0; k < 72; k++) {
                tr.append("<td>" + data[i].properties[propNames[k]] + "</td>");
            }
            $(y).append(tr);
        }
        window.history.replaceState(null, null, window.location.pathname);
        document.getElementById('data_length').innerHTML = data.length;       
    //});
    
    
    /*
    $.getJSON("loop.json", function (data) {
    $.each(data, function (index, value) {
       console.log(value);
        });
    });
    */
   
    //console.log("testing script");
    
    
    /*
    function showFunction1() { 
        console.log("testing twice");
        
        var x = document.getElementById("showResults");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
  }*/
  

    
  }
  showFunction2():void {
    var x = document.getElementsByClassName("showInput1") as HTMLCollectionOf<HTMLElement>;
    var y = document.getElementsByClassName("showInput2") as HTMLCollectionOf<HTMLElement>;
    var i;
    
    if (y[0].style.display == "none") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            y[i].style.display = "block";
        }
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            y[i].style.display = "none";
        }
    }
}
showTable(): void {
    var x = document.getElementById("mytable");
    var y = document.getElementById("mytable2");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}
  showFunction1(): void { 
    console.log("testing twice");
    
    var x = document.getElementById("showResults");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


  

}
