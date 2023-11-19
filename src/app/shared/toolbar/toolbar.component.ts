import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  
isLogged = this.authSvc.isLogged;
@Output() toogleSidenav = new EventEmitter<void>();
constructor(
  private authSvc: AuthService,
  private router: Router
){}

ngOnInit(): void {
  
}

onToggleSidenav(){
this.toogleSidenav.emit();
}

onLogout(): void {
  this.authSvc.logout();
}

}