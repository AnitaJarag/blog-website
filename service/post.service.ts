import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8081/blog/post';

  constructor(private http: HttpClient) {}

  // Create a new post
  createNewPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  // Get all posts
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get post by ID
  getPostById(postId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/blog/post/${postId}`);
  }
}
