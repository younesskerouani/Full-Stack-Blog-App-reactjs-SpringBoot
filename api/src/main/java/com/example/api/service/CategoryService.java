package com.example.api.service;

import com.example.api.model.Category;
import com.example.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private CategoryRepository categoryRepository;

    //ADD CATEGORY
    public Category addCategory(Category category){
        return mongoTemplate.save(category);
    }

    // GET categories
    public List<Category> findCat(){
        return categoryRepository.findAll();
    }

}
