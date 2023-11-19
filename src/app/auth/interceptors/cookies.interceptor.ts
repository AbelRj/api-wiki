import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler,  HttpInterceptor,  HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable()

export class cookiesInterceptor implements HttpInterceptor{

constructor(){}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')?.toString();
    console.log(token);
    if(token){
      req = req.clone({
        headers: req.headers.set('token', token)
      });
      return next.handle(req).pipe(
        catchError(this.handlerError)
      )
    }
    
    return next.handle(req).pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(error:HttpErrorResponse){
    switch(error.status){
      case 400:
        alert('No autorizado');
        break;
      case 401:
        console.log('No autorizado');
        break;
      case 403:
        console.log('No autorizado');
        break;
      case 404:
        console.log('No autorizado');
        break;
      case 452:
          alert('User o password incorrecto');
          break;
      case 500:
        console.log('No autorizado');
        break;
      default:
        console.log('default');
        break;
    }
     return throwError(error)
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: cookiesInterceptor,
  multi: true
}

