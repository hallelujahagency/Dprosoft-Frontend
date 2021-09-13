import {Injectable} from '@angular/core';
//import {Http, ResponseContentType} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FileService {
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

//downloadFile(): Observable<any> {
		//return this.http.get('http://localhost:8080/employees/download', {responseType: ResponseContentType.Blob});
  downloadFileDoc(filename:string): any {
		return this.http.get(`${this.apiUrl}/public/documents?file=${filename}`, {responseType: 'blob'});
  }
   
}