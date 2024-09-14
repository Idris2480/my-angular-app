import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postUserDetails(data: any): Observable<any>{
    return this.http.post('https://66bf5edd42533c403145f816.mockapi.io/Schlpayrollresults', data);
  }
}
