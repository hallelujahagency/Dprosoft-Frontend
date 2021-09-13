import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
import  MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from "../../../../../environments/environment";


@Component({
  selector: 'app-card-form-layout',
  templateUrl: './card-form-layout.component.html',
  styleUrls: ['./card-form-layout.component.css']
})
export class CardFormLayoutComponent implements OnInit {

  constructor() { 
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  @Input() formComponent: any;
  submitted: boolean;
  formDynamic: FormGroup;
  payLoad = '';
 // geocoder:any;

  ngOnInit(): void {



      const formGroup = {};
      this.formComponent.component.forEach(formControl => {
        formGroup[formControl.controlName] = new FormControl('');
      });
      this.formDynamic = new FormGroup(formGroup);

      this.geocoderInit();


  }

  submitForm() {

    this.submitted = true;
    this.payLoad = JSON.stringify(this.formDynamic.getRawValue());
     console.log(this.payLoad);
  
  }

  geocoderInit(){

    const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          types: 'country,region,place,postcode,locality,neighborhood'
    });

  geocoder.addTo('#geocoder');

  // Get the geocoder results container.
      var results = document.getElementById('result');
      
  // Add geocoder result to container.
      geocoder.on('result', function (e) {
      results.innerText = JSON.stringify(e.result, null, 2);
      });
      
  // Clear results container when search is cleared.
      geocoder.on('clear', function () {
        results.innerText = '';
      });
    
  }
  

}
