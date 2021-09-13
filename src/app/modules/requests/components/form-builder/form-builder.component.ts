import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }


  type:string;

  formCard=[
      {
              title:'Formulaire nouvelle demande d\'ordre de mission',
              key:'uuuid-demo-1',
              type:'form',
              style:'col-sm-12 col-lg-12',
              component: [

                      
                     /* {
                          controlType: 'text',
                          controlName: 'objet',
                          controlLabel: 'Objet',
                          valueType: 'text',
                          styleSize: 'col-md-12 mb-3',
                          placeholder: 'Objet',
                          validators: {
                              required: true,
                          }
                      },*/
                      {
                        controlName: 'mission',
                        controlLabel: 'Mission',
                        placeholder: 'Selectionner la mission',
                        styleSize: 'col-md-12 mb-3',
                        controlType: 'select',
                        options: [{
                          optionName: 'La mission de test',
                          value: 'test'
                        }, {
                          optionName: 'La mission test encore',
                          value: 'encore'
                        }],
                        validators: {
                          required: true
                        }
                      },
                      {
                        controlType: 'date',
                        controlName: 'objet',
                        controlLabel: 'Début',
                        valueType: 'date',
                        styleSize: 'col-md-6 mb-3',
                        placeholder: 'Début',
                        validators: {
                            required: true,
                        }
                    },

                    {
                      controlType: 'date',
                      controlName: 'objet',
                      controlLabel: 'Fin',
                      valueType: 'date',
                      styleSize: 'col-md-6 mb-3',
                      placeholder: 'Fin',
                      validators: {
                          required: true,
                      }
                  },

                      {
                          controlType: 'localisation',
                          controlName: 'geocoder',
                          controlLabel: 'Lieu de départ',
                          styleSize: 'col-md-6 mb-3',
                          valueType: 'localisation',
                          placeholder: 'Lieu de départ',
                          validators: {
                              required: true,
                          }
                      },

                      {
                        controlType: 'localisation',
                        controlName: 'geocoder',
                        controlLabel: 'Lieu d\'arriver',
                        styleSize: 'col-md-6 mb-3',
                        valueType: 'localisation',
                        placeholder: 'Lieu d\'arriver',
                        validators: {
                            required: true,
                        }
                    },

                  /*    {
                        controlType: 'number',
                        controlName: 'tf',
                        controlLabel: 'Tarif nuitee',
                        styleSize: 'col-md-4 mb-3',
                        valueType: 'number',
                        placeholder: 15000,
                        validators: {
                            required: true,
                        }
                    },*/
                    {
                      controlType: 'date',
                      controlName: 'traite',
                      controlLabel: 'A traiter avant le',
                      valueType: 'date',
                      styleSize: 'col-md-4 mb-3',
                      placeholder: 'A traiter avant le',
                      validators: {
                          required: true,
                      }
                  },

                  {
                    controlType: 'checkbox',
                    controlName: 'fraisAvance', 
                    controlLabel: 'Demande frais de mission',
                    valueType: 'checkbox',
                    styleSize: 'col-md-4 mb-3',
                    placeholder: 'Demande frais de mission',
                    validators: {
                        required: true,
                    }
                },

                {
                  controlType: 'checkbox',
                  controlName: 'voyageOffline',
                  controlLabel: 'Demande de Visa',
                  valueType: 'checkbox',
                  styleSize: 'col-md-4 mb-3',
                  placeholder: 'Demande de Visa',
                  validators: {
                      required: true,
                  }
              },

              {
                controlType: 'textarea',
                controlName: 'fraisText',
                controlLabel: 'Commentaire',
                valueType: 'textarea',
                styleSize: 'col-md-12 mb-3',
                placeholder: 'Commentaire',
                validators: {
                    required: false,
                }
            }


                  
              ]
      }
    ];


  ngOnInit(): void {

          this.route.queryParams
          .subscribe(params => {
           // console.log(params); // 
            this.type = params.type;
            console.log(this.type); // 
          }
        );

  }

  



}


