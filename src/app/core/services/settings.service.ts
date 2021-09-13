import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl = environment.apiUrl;
  constructor( private http: HttpClient,
    public toastrService: ToastrService,) { }


      addCollaborateursClasse(data:any) {

        return this.http.request('post', `${this.apiUrl}/api/v1/parametres/ajouter-une-classe-de-collaborateur`,{
                      body:data,
                      responseType:'json',
                      observe: 'body'
            })
            .pipe(map((users:any) => {
      
              return users.users;
      
            }));
        }

      getCollaborateursClasse() {

        return this.http.request('post', `${this.apiUrl}/api/v1/parametres/ajouter-une-classe-de-collaborateur`,{
                      body:null,
                      responseType:'json',
                      observe: 'body'
            })
            .pipe(map((users:any) => {
      
              return users.users;
      
            }));
        }


}
