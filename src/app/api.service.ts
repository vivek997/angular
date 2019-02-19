import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createUser(user): Observable<any> {
    const body = {username: user.username, dob: user.dob, email: user.email, phone_no: user.phone_no };
    return this.http.post(this.baseurl + '/user/', body,
    {headers: this.httpHeaders});
  }

}
