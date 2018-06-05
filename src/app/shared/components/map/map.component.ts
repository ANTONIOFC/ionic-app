import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  

  ngAfterViewInit() {
    this.initMap();
  }

  initMap(): void {
    const uluru = {lat: 46.2, lng: 6.16};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  
}


