import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;
  userRole: string | null = null;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.userRole = localStorage.getItem('role');
  }

  logout() {
    this.authService.logout()
  }

}
