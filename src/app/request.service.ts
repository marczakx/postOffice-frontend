import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url: string;
  private user: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public send(pseudonym: string): Observable<Request> {
    return this.http.get<Request>(this.url+'add/'+pseudonym);
  }
 
  public sendAuthorization(pseudonym: string, password: string,username: string): Observable<Request> {
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Request>(this.url+username+'/add/'+pseudonym, {headers});
  }
}



