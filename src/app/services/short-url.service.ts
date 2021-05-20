import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten';
  token = '732dcf86a3d725eb52936382b36e05e225d2ae0b';

  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any>{

    // const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token})

    const body ={
      long_url: nombreUrl
    }
    return this.http.post(this.URL, body)
  }
}
