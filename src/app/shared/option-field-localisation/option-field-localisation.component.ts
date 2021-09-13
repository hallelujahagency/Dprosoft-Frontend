import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../form-component.model';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-option-field-localisation',
  templateUrl: './option-field-localisation.component.html',
  styleUrls: ['./option-field-localisation.component.css']
})
export class OptionFieldLocalisationComponent implements OnInit {

  @Input() field:FormComponent;
  @Input() formCard:FormGroup;
  geocoder:any;

  constructor() { 
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
  


    ngOnInit(): void {

     // this.geocoderInit();
    }

    get isValid() { return this.formCard.controls[this.field.controlName].valid; }
    get isDirty() { return this.formCard.controls[this.field.controlName].dirty; }
    get isTouched() { return this.formCard.controls[this.field.controlName].touched; }
    get isRequired() { return this.formCard.controls[this.field.controlName].errors.required; }

    geocoderInit(){

          this.geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            types: 'country,region,place,postcode,locality,neighborhood'
        });

        this.geocoder.addTo('#geocoder');

        // Get the geocoder results container.
            var results = document.getElementById('result');
            
        // Add geocoder result to container.
            this.geocoder.on('result', function (e) {
            results.innerText = JSON.stringify(e.result, null, 2);
            });
            
        // Clear results container when search is cleared.
            this.geocoder.on('clear', function () {
              results.innerText = '';
            });
          
        }

}
