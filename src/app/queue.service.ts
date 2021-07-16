import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { QueueItem } from './queue-item';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  public findAll(): Observable<QueueItem[]> {
    return this.http.get<QueueItem[]>(this.url+'/queue');
  }
  public getTime(id: string): Observable<string> {
    return this.http.get<string>(this.url+'/getTime/id/'+id);
  }
  public getNumber(id: string): Observable<string> {
    return this.http.get<string>(this.url+'/getNumber/id/'+id);
  }
  public getTimeByPseudonym(pseudonym: string): Observable<string> {
    return this.http.get<string>(this.url+'/getTime/pseudonym/'+pseudonym);
  }
  public getNumberByPseudonym(pseudonym: string): Observable<string> {
    return this.http.get<string>(this.url+'/getNumber/pseudonym/'+pseudonym);
  }
}

