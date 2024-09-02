import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Student {
  id?: number;
  matricula: string;
  nome: string;
  email: string;
}

interface Post {
  id?: number;
  titulo: string;
  descricao: string;
  dataHora: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://3.128.249.166:3000';

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student);
  }

  addPost(studentId: number, post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/students/${studentId}/posts`, post);
  }

  getPosts(studentId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/students/${studentId}/posts`);
  }

  deletePost(studentId: number, postId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${studentId}/posts/${postId}`);
  }
}
