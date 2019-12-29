import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:8080/users/";

  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  login(u: User): Observable<JsonResponse> {
    return this.http.post(this.url+"/login", u) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  save(user: User): Observable<JsonResponse> {
    return this.http.post(this.url, user) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
}
