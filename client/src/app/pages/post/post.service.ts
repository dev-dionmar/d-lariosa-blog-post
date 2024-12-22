import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post_i } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post_i[]>('http://localhost:3000/post');
  }
  create(body: Post_i) {
    return this.http.post<Post_i>('http://localhost:3000/post', body);
  }
  update(id: number, body: Post_i) {
    return this.http.patch<Post_i>(`http://localhost:3000/post/${id}`, body);
  }
  delete(id: number) {
    return this.http.delete<Post_i>(`http://localhost:3000/post/${id}`);
  }
}
