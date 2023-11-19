import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, map, take } from 'rxjs';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class checkLoginGuard implements CanActivate {
  constructor(
    private authSvc: AuthService
  ){}
  canActivate(): Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => isLogged) 
    );
    
  }

}
/*
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class checkLoginGuard implements CanActivate {
  constructor(
    private authSvc: AuthService
  ){}
  canActivate(): Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => !isLogged),
    );
    
  }

}
*/