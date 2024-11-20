// src/app/createpost/createpost.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Ensure Router is imported
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpost',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {
  postForm!: FormGroup;
  alertMessage: string = '';
  alertType: string = '';

  constructor(
    private fb: FormBuilder,
    public router: Router,  // Change router to public
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy: [null, Validators.required],
      tags: ['', Validators.required]  // Add tags field to the form
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const data = this.postForm.value;
      data.tags = data.tags.split(',').map((tag: string) => tag.trim()); // Split tags by comma
  
      this.postService.createNewPost(data).subscribe(
        (res) => {
          this.alertMessage = 'Post created successfully!';
          this.alertType = 'success';
          this.router.navigate(['/']); // Navigate after creation
        },
        (error) => {
          this.alertMessage = 'Something went wrong!';
          this.alertType = 'danger';
          console.error(error);
        }
      );
    } else {
      this.alertMessage = 'Please fill all required fields!';
      this.alertType = 'danger';
    }
  }
}