import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.api.url}:${environment.api.port}/${environment.api.root}/user`;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string, usuario: any }>(`${this.apiUrl}/login`, { "email":username, "password":password })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('nombre', response.usuario.nombre);
          localStorage.setItem('role', response.usuario.role);
          return response;
        }),
        catchError(error => {
          return of(error);
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
