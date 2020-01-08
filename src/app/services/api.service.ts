import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl="http://5e13407a6e229f0014679403.mockapi.io/api/login/login";
  
  constructor(private http: HttpClient) { }

  testApi(){
    return this.http.get(this.apiUrl).toPromise();
  }

}
