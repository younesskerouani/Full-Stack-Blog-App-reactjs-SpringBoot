package com.example.api.controller;

import com.example.api.model.Category;
import com.example.api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/categories")
@CrossOrigin("http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @GetMapping
    List<Category> getCategories(){
        return categoryService.findCat();
    }

}
