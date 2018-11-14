import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class Userservice {
  constructor(private http: HttpClient)
  { }
  private apiurl = 'http://localhost:3000/api';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  params: any;
  getalluser(): Observable<any> {
    return this.http.get(this.apiurl + '/user/', { headers: this.headers });

  }

}
