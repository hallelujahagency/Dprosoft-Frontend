import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface ServiceEntrepriseModel{
      services: {
                      _id: string,
                      entreprise: string,
                      name: string,
                      serviceusers: {
                              responsable: boolean,
                              user: string
                                    }[],
                      usersdata: {
                            _id: string,
                            fullname: string,
                            contact: string,
                            email: string
                          }[]
              } []
}



@Injectable({
  providedIn: 'root'
})
export class ServicesEntrepriseService {

  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient,) { }
  


    AddService(name:string) {

        return  this.http.request('post', `${this.apiUrl}/api/parametres/ajout-un-service-entreprise`,{
                                body:{name: name},
                                responseType:'json',
                                observe: 'body'
          });
      }

    getServiceByEntreprise() {

      return this.http.request('post', `${this.apiUrl}/api/parametres/tous-les-services-entreprise`,{
                    body:null,
                    responseType:'json',
                    observe: 'body'
          })
          .pipe(map((services:ServiceEntrepriseModel) => {

            return services.services;

          }));
      }

    UpdateResponsableServiceEntreprise(service:string, user:string) {

      const credentiels = { service:service, user:user }
      return this.http.request('post', `${this.apiUrl}/api/parametres/modifier-le-responsable-service-entreprise`,{
                    body:credentiels,
                    responseType:'json',
                    observe: 'body'
           })
           .pipe(map((data:any) => {
    
            return data;
    
          }));
      }

    UpdateServiceEntreprise(serviceID:string, name:string) {


        const credentiels = { serviceID:serviceID, name:name }
        return this.http.request('post', `${this.apiUrl}/api/parametres/modifier-un-service-entreprise`,{
                      body:credentiels,
                      responseType:'json',
                      observe: 'body'
             })
             .pipe(map((data:any) => {
      
              return data;
      
            }));
      }



    DeleteServiceEntreprise(serviceID:string) {


        const credentiels = { serviceID:serviceID}
        return this.http.request('post', `${this.apiUrl}/api/parametres/supprimer-un-service-entreprise`,{
                      body:credentiels,
                      responseType:'json',
                      observe: 'body'
             })
             .pipe(map((data:any) => {
      
              return data;
      
            }));
      }



}
