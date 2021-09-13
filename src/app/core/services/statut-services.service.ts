import { Injectable } from '@angular/core';
import { StatutEntreprise   } from 'src/app/core/models/statut-entreprise';
import { statut  } from 'src/app/data/statut';

@Injectable({
  providedIn: 'root'
})
export class StatutServicesService {

  constructor() { }

  getAll() {
		//return this.http.get<Worflow>(`${this.apiUrl}/api/worflow`);
    const data : StatutEntreprise [] = statut  ;
    return data;
	}
}
 