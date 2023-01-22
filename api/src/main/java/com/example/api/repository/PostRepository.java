package com.example.api.repository;

import com.example.api.model.Post;
import com.example.api.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String> {
}
