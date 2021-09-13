import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WorflowService {

  private apiUrl = environment.apiUrl;
  constructor(  private http: HttpClient) { }



  getWorflowServiceAndResponsable() {

    return this.http.request('post', `${this.apiUrl}/api/parametres/tous-les-service-worflow-ordre-de-mission`,{
                                body:null,
                                responseType:'json',
                                observe: 'body'
                      })
                      .pipe(map((data:any) => {

                        let newData = [] ;
                      
                                  data.worflowServices.forEach(worflowService => {


                                    let user :any;
                                             
                                       let getResponsable = worflowService.serviceusers.find(e=> e.responsable == true );

                                       user = 'empty';

                                       if(getResponsable){
                                           user = worflowService.usersdata.find(e=> e._id == getResponsable.user ); 
                                       }


                                        let newItem = {
                                          _id: worflowService._id,
                                          description: worflowService.description,
                                          position: worflowService.position,
                                          color_icon: worflowService.color_icon,
                                          service_color: worflowService.service_color,
                                          worflow: worflowService.worflow,
                                          name: worflowService.servicedata[0].name,
                                          service: worflowService.service,
                                          responsable:user
                                        }

                                        newData.push(newItem);
                                    
                                  });

                                  return newData;
                
                      }));
                  }

    addServiceToWorflow(data:any) {

                    return this.http.request('post', `${this.apiUrl}/api/parametres/ajouter-service-worflow-ordre-de-mission`,{
                                  body:data,
                                  responseType:'json',
                                  observe: 'body'
                        })
                        .pipe(map((worflowService:any) => {
                  
                          return worflowService;
                  
                        }));
                    }

    updatePositionServiceToWorflow(data:{worflowServiceId:string, position:number}) {

                      return this.http.request('post', `${this.apiUrl}/api/parametres/modifier-la-position-du-service-worflow-ordre-de-mission`,{
                                    body:data,
                                    responseType:'json',
                                    observe: 'body'
                          })
                          .pipe(map((worflowService:any) => {
                    
                            return worflowService;
                    
                          }));
                      }

    updateServiceToWorflow(data:any) {

                        return this.http.request('post', `${this.apiUrl}/api/parametres/modifier-service-worflow-ordre-de-mission`,{
                                      body:data,
                                      responseType:'json',
                                      observe: 'body'
                            })
                            .pipe(map((worflowService:any) => {
                      
                              return worflowService;
                      
                            }));
                        }

    DeleteServiceToWorflow(data:{worflowServiceId:string}) {

                          return this.http.request('post', `${this.apiUrl}/api/parametres/supprimer-service-worflow-ordre-de-mission`,{
                                        body:data,
                                        responseType:'json',
                                        observe: 'body'
                              })
                              .pipe(map((worflowService:any) => {
                        
                                return worflowService;
                        
                              }));
                          }





}
