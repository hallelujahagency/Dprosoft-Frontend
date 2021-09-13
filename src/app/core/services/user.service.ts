import { Injectable } from '@angular/core';
import { User   } from 'src/app/core/models/user';
import { users  } from 'src/app/data/users';

import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
declare var $;



import {} from 'google.maps';


export interface Collaborateur{
  
  profilePicture: string,
  gender: string,
  pays: string,
  ville: string,
  activityStatus: string,
  _id: string,
  email: string,
  fullname: string,
  contact: string,
  password: string,
  entreprise: string;
  fonction:string,

}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  constructor( private http: HttpClient,
    public toastrService: ToastrService,) { }


getCollaborateur() {

      return this.http.request('post', `${this.apiUrl}/api/v1/user-account/get-informations`,{
                    body:null,
                    responseType:'json',
                    observe: 'body'
          })
          .pipe(map((user:any) => {
    
            return user;
    
          }));
      }


getServices() {

        return this.http.request('post', `${this.apiUrl}/api/v1/user-account/get-services`,{
                      body:null,
                      responseType:'json',
                      observe: 'body'
            })
            .pipe(map((services:any) => {
      
              return services;
      
            }));
        }
uplaodprofilPage(postPhoto:any) {

          return this.http.request('post', `${this.apiUrl}/api/v1/user-account/addProfiePicture`,{
                        body:postPhoto,
                        responseType:'json',
                        observe: 'body'
              })
              .pipe(map((data:any) => {
        
                return data;
        
              }));
          }

userUpdate(data:any) {

            return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-informations-personnelles`,{
                          body:data,
                          responseType:'json',
                          observe: 'body'
                })
                .pipe(map((data:any) => {
          
                  return data;
          
                }));
            }

userUpdateAdresse(data:any) {

              return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-les-adresses`,{
                            body:data,
                            responseType:'json',
                            observe: 'body'
                  })
                  .pipe(map((data:any) => {
            
                    return data;
            
                  }));
              }

userUpdateInfoBancaire(data:any) {

                return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-les-informations-bancaires`,{
                              body:data,
                              responseType:'json',
                              observe: 'body'
                    })
                    .pipe(map((data:any) => {
              
                      return data;
              
                    }));
                }

getVehiculesByCollaborateur() {

                  return this.http.request('post', `${this.apiUrl}/api/v1/user-account/get-vehicule-by-collaborateur`,{
                                body:null,
                                responseType:'json',
                                observe: 'body'
                      })
                      .pipe(map((data:any) => {
                
                        return data;
                
                      }));
                  }

addVehiculesByCollaborateur(data:any) {

                    return this.http.request('post', `${this.apiUrl}/api/v1/user-account/add-vehicule`,{
                                  body:data,
                                  responseType:'json',
                                  observe: 'body'
                        })
                        .pipe(map((data:any) => {
                  
                          return data;
                  
                        }));
                    }
readVehiculeById(data:any) {

                      return this.http.request('post', `${this.apiUrl}/api/v1/user-account/get-vehicule-by-id`,{
                                    body:data,
                                    responseType:'json',
                                    observe: 'body'
                          })
                          .pipe(map((data:any) => {
                    
                            return data;
                    
                          }));
                      }

updateVehiculeById(data:any) {

                      return this.http.request('post', `${this.apiUrl}/api/v1/user-account/update-vehicule-by-id`,{
                                    body:data,
                                    responseType:'json',
                                    observe: 'body'
                          })
                          .pipe(map((data:any) => {
                    
                            return data;
                    
                          }));
                      }

deleteVehiculeById(data:any) {

                        return this.http.request('post', `${this.apiUrl}/api/v1/user-account/delete-vehicule-by-id`,{
                                      body:data,
                                      responseType:'json',
                                      observe: 'body'
                            })
                            .pipe(map((data:any) => {
                      
                              return data;
                      
                            }));
                        }


 changepassword(data:any) {

              return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-mot-de-passe`,{
                            body:data,
                            responseType:'json',
                            observe: 'body'
                  })
                  .pipe(map((data:any) => {
            
                    return data;
            
                  }));
              }

userUpdateEmailContact(data:any) {

                return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-contact-email`,{
                              body:data,
                              responseType:'json',
                              observe: 'body'
                    })
                    .pipe(map((data:any) => {
              
                      return data;
              
                    }));
                }    

userUpdatePreferences(data:any) {

                  return this.http.request('post', `${this.apiUrl}/api/v1/user-account/modifier-preferences`,{
                                body:data,
                                responseType:'json',
                                observe: 'body'
                      })
                      .pipe(map((data:any) => {
                
                        return data;
                
                      }));
                  } 

 addBesoin(data:any) {

                    return this.http.request('post', `${this.apiUrl}/api/v1/besoins/add-besoin`,{
                                  body:data,
                                  responseType:'json',
                                  observe: 'body'
                        })
                        .pipe(map((data:any) => {
                  
                          return data;
                  
                        }));
                    }

getBesoins() {

                      return this.http.request('post', `${this.apiUrl}/api/v1/besoins/liste-des-besoins`,{
                                    body:{},
                                    responseType:'json',
                                    observe: 'body'
                          })
                          .pipe(map((data:any) => {
                    
                            return data;
                    
                          }));
                      }

getOrdreMissions() {

                        return this.http.request('post', `${this.apiUrl}/api/v1/ordre-de-mission/liste-des-ordres-de-mission`,{
                                      body:{},
                                      responseType:'json',
                                      observe: 'body'
                            })
                            .pipe(map((data:any) => {
                      
                              return data;
                      
                            }));
                        }

getOrdreMissionsForValidate() {

                          return this.http.request('post', `${this.apiUrl}/api/v1/ordre-de-mission/liste-des-ordres-de-mission-for-validate`,{
                                        body:{},
                                        responseType:'json',
                                        observe: 'body'
                              })
                              .pipe(map((data:any) => {
                        
                                return data;
                        
                              }));
                          }

validateOrderMission(data:any) {

                            return this.http.request('post', `${this.apiUrl}/api/v1/ordre-de-mission/validate`,{
                                          body:data,
                                          responseType:'json',
                                          observe: 'body'
                                })
                                .pipe(map((data:any) => {
                          
                                  return data;
                          
                                }));
                            } 

getOrderMissionFileName(data:any) {

                              return this.http.request('post', `${this.apiUrl}/api/v1/ordre-de-mission/pdf-name`,{
                                            body:data,
                                            responseType:'json',
                                            observe: 'body'
                                  })
                                  .pipe(map((data:any) => {
                            
                                    return data;
                            
                                  }));
                              }

getBesoinSingle(data:any) {

                        return this.http.request('post', `${this.apiUrl}/api/v1/besoins/get-besoin-data`,{
                                      body:data,
                                      responseType:'json',
                                      observe: 'body'
                            })
                            .pipe(map((data:any) => {
                      
                              return data;
                      
                            }));
                        }


getCollaborateursServices() {

                        return this.http.request('post', `${this.apiUrl}/api/v1/besoins/get-collaborateurs-services`,{
                                      body:{},
                                      responseType:'json',
                                      observe: 'body'
                            })
                            .pipe(map((data:any) => {
                      
                              return data;
                      
                            }));
                        }
            
TraitementBesoin(data:any) {

                          return this.http.request('post', `${this.apiUrl}/api/v1/besoins/traitement-besoin`,{
                                        body:data,
                                        responseType:'json',
                                        observe: 'body'
                              })
                              .pipe(map((data:any) => {
                        
                                return data;
                        
                              }));
                          }

refusedBesoin(data:any) {
 
                            return this.http.request('post', `${this.apiUrl}/api/v1/besoins/refused-besoin`,{
                                          body:data,
                                          responseType:'json',
                                          observe: 'body'
                                })
                                .pipe(map((data:any) => {
                          
                                  return data;
                          
                                }));
                            }


getRequestsMission() {

                   return this.http.request('post', `${this.apiUrl}/api/v1/besoins/get-requests-mission`,{
                                            body:{},
                                            responseType:'json',
                                            observe: 'body'
                                  })
                                  .pipe(map((data:any) => {
                            
                                    return data;
                            
                                  }));
                              }

validateRequestMission(data:any) {

                                return this.http.request('post', `${this.apiUrl}/api/v1/besoins/validate-request-mission`,{
                                              body:data,
                                              responseType:'json',
                                              observe: 'body'
                                    })
                                    .pipe(map((data:any) => {
                              
                                      return data;
                              
                                    }));
                                }

refusedRequestMission(data:any) {

                                  return this.http.request('post', `${this.apiUrl}/api/v1/besoins/refused-request-mission`,{
                                                body:data,
                                                responseType:'json',
                                                observe: 'body'
                                      })
                                      .pipe(map((data:any) => {
                                
                                        return data;
                                
                                      }));
                                  }


getLocation(term: string) {

       
  const displaySuggestions = function (
    predictions:  google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
          alert(status);
          return;
        }

        var  results = document.getElementById('custom-output-autocomplete');
        // Empty results container
        results.innerHTML = '';

        // Place service status error
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          results.innerHTML = '<div class="pac-item pac-item-error">Your search returned no result. Status: ' + status + '</div>';
          return;
        }


        // Build output for each prediction
        for (var i = 0, prediction; prediction = predictions[i]; i++) {


          // Insert output in results container
          results.innerHTML += '<div class="pac-item" style="cursor:pointer;" onClick="getDemo(\'' + prediction.place_id + '\')" data-placeid="' + prediction.place_id + '" data-name="' + prediction.terms[0].value + '"><span class="pac-icon pac-icon-marker"></span>' + prediction.description + '</div>';
        }


        
        $('#custom-output-autocomplete').css('display','block');
  };

      var sessionToken = new google.maps.places.AutocompleteSessionToken();


      if(term !== ""){

        // Pass the token to the autocomplete service.
        var autocompleteService = new google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions({
          input: term,
          types:["geocode"],
          sessionToken: sessionToken,
          
        },
        displaySuggestions);
              
      }       
           
 
  }

















    getCollaborateursEntreprise() {

      return this.http.request('post', `${this.apiUrl}/api/parametres/liste-des-collaborateurs-entreprise`,{
                    body:null,
                    responseType:'json',
                    observe: 'body'
          })
          .pipe(map((users:any) => {
    
            return users.users;
    
          }));
      }

      getCollaborateursAndService() {

        return this.http.request('post', `${this.apiUrl}/api/parametres/service-entreprise-et-collaborateur`,{
                      body:null,
                      responseType:'json',
                      observe: 'body'
            })
            .pipe(map((data:any) => {
      
              let servicesData = [];

              data.services.forEach(element => {

                      element.serviceusers.forEach(e => {
                        /* services data */
                      servicesData.push(e);

                      });
                
              });

            return servicesData;
      
            }));
        }

      addCollaborateursEntreprise(data:any) {

          return this.http.request('post', `${this.apiUrl}/api/parametres/ajouter-un-collaborateur-entreprise`,{
                        body:data,
                        responseType:'json',
                        observe: 'body'
              })
              .pipe(map((users:any) => {
        
                return users;
        
              }));
          }

      addCollaborateurToService(data:any) {

            return this.http.request('post', `${this.apiUrl}/api/parametres/ajout-un-collaborateur-au-service-entreprise`,{
                          body:data,
                          responseType:'json',
                          observe: 'body'
                })
                .pipe(map((users:any) => {
          
                  return users;
          
                }));
            }

        updateCollaborateur(data:any) {

              return this.http.request('post', `${this.apiUrl}/api/parametres/modification-informations-collaborateur-entreprise`,{
                            body:data,
                            responseType:'json',
                            observe: 'body'
                  })
                  .pipe(map((users:any) => {
            
                    return users;
            
                  }));
              }

      deleteCollaborateur(data:any) {

              return this.http.request('post', `${this.apiUrl}/api/parametres/supprimer-un-collaborateur-entreprise`,{
                            body:data,
                            responseType:'json',
                            observe: 'body'
                  })
                  .pipe(map((users:any) => {
            
                    return users;
            
                  }));
              }




  getAll() {
		//return this.http.get<Worflow>(`${this.apiUrl}/api/worflow`);
    const data : User [] = users ;
    return data.filter(e=> e.rolesId != 1);
	}

  getByUser(userID:number) {
		//return this.http.get<Worflow>(`${this.apiUrl}/api/worflow`);
    const data : User [] = users ;
    return data.find(e=> e.id == userID);
	}
}
