package com.project.blog.service;

import java.util.List;

import com.project.blog.model.Post;

public interface PostService {
   Post  savePost(Post post);
   
   List<Post> getAllPost();
   
   Post getPostById(Long postId);
}
