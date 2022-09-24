import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }
  public getDate(): Observable<any> {
    return this.http.get(environment.apiHost + '/date');
  }
  public postText(text): Observable<any> {
    return this.http.post(environment.apiHost + '/text',{
      text: text
    });
  }

}
