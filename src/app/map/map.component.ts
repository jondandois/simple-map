import { Component, OnInit } from '@angular/core';
// declare leaflet var
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
      https://angular.io/guide/http
      notes on creating a service, configured from config, to get data
    */

    const map = L.map('map').setView([39.288299, -76.613486], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
