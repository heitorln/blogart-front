import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'localhost:8080/auth';
  private token: string | null = null; // Armazene o token JWT aqui
  private userId: string | null = null; // Armazene o ID do usuário aqui

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  login(credentials: any): Observable<any> {
    // Realize uma solicitação HTTP POST para o servidor com as credenciais
    return this.http.post(`${this.apiUrl}/login`, credentials);
    // Armazene o token e o ID do usuário após o login
  }

  // Define o token JWT após o login
  setToken(token: string): void {
    this.token = token;
  }

  // Define o ID do usuário após o login
  setUserId(userId: string): void {
    this.userId = userId;
  }

  logout(): void {
    // Limpe o token e o ID do usuário após o logout
    this.token = null;
    this.userId = null;
  }

  isLoggedIn(): boolean {
    // Verifique se o usuário está autenticado (se o token estiver definido)
    return this.token !== null;
  }

  getToken(): string | null {
    return this.token;
  }

  getUserId(): string | null {
    return this.userId;
  }
}
