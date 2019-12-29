import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Vendor } from '../model/vendor.class';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string = "http://localhost:8080/vendors/";

  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  save(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(this.url, vendor) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
}
