import { FormCard } from './form-card.model';

export const  formPannel: FormCard[]=[

        {
                title:'text dynamic form',
                key:'uuuid-demo-1',
                type:'form',
                style:'col-sm-12 col-lg-6',
                component: [

                        
                        {
                            controlType: 'text',
                            controlName: 'firstname',
                            controlLabel: 'Nom',
                            valueType: 'text',
                            styleSize: 'col-md-6 mb-3',
                            placeholder: 'Nom',
                            validators: {
                                required: true,
                            }
                        },

                        {
                            controlType: 'text',
                            controlName: 'lastname',
                            controlLabel: 'Prenom(s)',
                            styleSize: 'col-md-6 mb-3',
                            valueType: 'text',
                            placeholder: 'Prenom(s)',
                            validators: {
                                required: true,
                            }
                        },

                        {
                            controlType: 'text',
                            controlName: 'email',
                            controlLabel: 'Adresse Email',
                            styleSize: 'col-md-12 mb-3',
                            valueType: 'email',
                            placeholder: 'Email',
                            validators: {
                                required: true,
                            }
                        },
                        {
                            controlName: 'gender',
                            controlLabel: 'Genre',
                            placeholder: 'Selectionner le genre',
                            styleSize: 'col-md-6 mb-3',
                            controlType: 'select',
                            options: [{
                              optionName: 'Homme',
                              value: 'homme'
                            }, {
                              optionName: 'Femmme',
                              value: 'femme'
                            }],
                            validators: {
                              required: true
                            }
                          },

                          {
                            controlName: 'vehicule',
                            controlLabel: 'Vehicule',
                            styleSize: 'col-md-6 mb-3',
                            controlType: 'radio',
                            options: [{
                              optionName: 'Bike',
                              value: 'bike'
                            }, {
                              optionName: 'Car',
                              value: 'car'
                            }],
                            validators: {
                              required: true
                            }
                          },
                    
                ]
        },
        {
            title:'text dynamic form custom',
            key:'uuuid-demo-3',
            type:'form',
            style:'col-sm-12 col-lg-6',
            component: [

                    
                    {
                        controlType: 'text',
                        controlName: 'couleur',
                        controlLabel: 'Teint',
                        valueType: 'text',
                        styleSize: 'col-md-6 mb-3',
                        placeholder: 'Teint',
                        validators: {
                            required: true,
                        }
                    },

                    {
                        controlType: 'text',
                        controlName: 'objectif',
                        controlLabel: 'Objectif',
                        styleSize: 'col-md-6 mb-3',
                        valueType: 'text',
                        placeholder: 'Objectif',
                        validators: {
                            required: true,
                        }
                    },

                    {
                        controlType: 'text',
                        controlName: 'email',
                        controlLabel: 'Adresse Email',
                        styleSize: 'col-md-12 mb-3',
                        valueType: 'mail',
                        placeholder: 'Email',
                        validators: {
                            required: true,
                        }
                    },
                    {
                        controlName: 'gender-other',
                        controlLabel: 'Genre',
                        placeholder: 'Selectionner le genre',
                        styleSize: 'col-md-6 mb-3',
                        controlType: 'select',
                        options: [{
                          optionName: 'Homme',
                          value: 'homme'
                        }, {
                          optionName: 'Femmme',
                          value: 'femme'
                        }],
                        validators: {
                          required: true
                        }
                      },

                      {
                        controlName: 'radioinput',
                        controlLabel: 'Radio Input',
                        styleSize: 'col-md-6 mb-3',
                        controlType: 'radio',
                        options: [{
                          optionName: 'Other',
                          value: 'other'
                        }, {
                          optionName: 'Account',
                          value: 'account'
                        }],
                        validators: {
                          required: true
                        }
                      },

                      {
                        controlName: 'checkinput',
                        controlLabel: 'Agree to terms and conditions',
                        styleSize: 'col-md-12 mb-3',
                        controlType: 'checkbox',
                        validators: {
                          required: true
                        }
                      },
                
            ]
        }

            

        ];
