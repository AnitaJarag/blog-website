import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  posts: any[] = []; // Array to store posts

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  // Method to fetch all posts
  getPosts(): void {
    this.postService.getAllPosts().subscribe(
      (data) => {
        this.posts = data; // Store posts in the array
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  // Method to view details of a specific post
  viewPost(postId: number): void {
    console.log('View Post ID:', postId);
    this.router.navigate(['/post-details', postId]); // Navigate to the post details page
  }
}
