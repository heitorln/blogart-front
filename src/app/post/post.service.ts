import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'localhost:8080/post';

  constructor(private http: HttpClient) { }

  createPost(postData: any, token: string | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}`, postData, {headers});
  }

  // Adicione outros métodos conforme necessário, como buscar, excluir, atualizar postagens, etc.
}
