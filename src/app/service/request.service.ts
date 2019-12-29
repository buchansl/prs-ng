import { Injectable } from '@angular/core';
import { Request } from '../model/request.class';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "http://localhost:8080/requests/";

  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  listRequestId(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"/list-review/"+id) as Observable<JsonResponse>;
  }

  save(request: Request): Observable<JsonResponse> {
    return this.http.post(this.url, request) as Observable<JsonResponse>;
  }
  approve(request: Request): Observable<JsonResponse> {
    return this.http.put(this.url+ "approve", request) as Observable<JsonResponse>;
  }
  update(request: Request): Observable<JsonResponse> {
    return this.http.put(this.url, request) as Observable<JsonResponse>;
  }
  submitForReview(request: Request): Observable<JsonResponse> {
    return this.http.put(this.url + "submit-review", request) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
  reject(request: Request): Observable<JsonResponse> {
    return this.http.put(this.url + "reject", request) as Observable<JsonResponse>;
  }
}
