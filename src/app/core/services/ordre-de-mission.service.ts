import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdreDeMissionService {
  private apiUrl = environment.apiUrl;

  constructor(
		private http: HttpClient,
  ) { }

    /* request ordre de mission */
    requestOrdreDeMision(data:any) {

      return  this.http.request('post', `${this.apiUrl}/api/v1/ajouter-un-ordre-de-mission`,{
            body:{  objet: data.objet, begin: data.begin,
                    end: data.end, deadline: data.deadline,
                    dataSupp: data.dataSupp
                  },
            responseType:'json',
            observe: 'body'
         })
    }

  /* get template ordre de mission */
  addWorflowOrdreDeMision() {

		return  this.http.request('post', `${this.apiUrl}/api/parametres/ajout-un-worflow-ordre-de-mission`,{
      body:null,
      responseType:'json',
      observe: 'body'
       })
	}

  /* get template ordre de mission */
  getTemplateOrdreDeMision() {

		return  this.http.request('post', `${this.apiUrl}/api/v1/parametres/template-ordre-de-mission`,{
      body:null,
      responseType:'json',
      observe: 'body'
       })
	}

  /* update template ordre de mission */
  updateTemplateOrdreDeMision(templateID:string, template:string) {

		return  this.http.request('post', `${this.apiUrl}/api/v1/parametres/modifier-template-ordre-de-mission`,{
      body:{templateID: templateID, template:template},
      responseType:'json',
      observe: 'body'
       })
	}


  /* get list de missions entreprise */

  getMissionsEntreprise() {

    return this.http.request('post', `${this.apiUrl}/api/liste-des-missions-entreprise`,{
                  body:null,
                  responseType:'json',
                  observe: 'body'
        })
        .pipe(map((data:any) => {

          return data.missions;

        }));
    }


  /* add mission entreprise */

  addMissionEntreprise(data:any) {

    return this.http.request('post', `${this.apiUrl}/api/ajouter-une-mission-entreprise`,{
                  body:data,
                  responseType:'json',
                  observe: 'body'
        })
        .pipe(map((data:any) => {

          return data;

        }));
    }


    /* update mission entreprise */

  updateMissionEntreprise(data:any) {

    return this.http.request('post', `${this.apiUrl}/api/modifier-une-mission-entreprise`,{
                  body:data,
                  responseType:'json',
                  observe: 'body'
        })
        .pipe(map((data:any) => {

          return data;

        }));
    }

      /* delete mission entreprise */

  deleteMissionEntreprise(data:any) {

    return this.http.request('post', `${this.apiUrl}/api/supprimer-une-mission-entreprise`,{
                  body:data,
                  responseType:'json',
                  observe: 'body'
        })
        .pipe(map((data:any) => {

          return data;

        }));
    }

}
