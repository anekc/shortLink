import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '732dcf86a3d725eb52936382b36e05e225d2ae0b';

    request = request.clone({setHeaders: {Authorization: 'Bearer ' + TOKEN }});
    return next.handle(request);
  }
}
