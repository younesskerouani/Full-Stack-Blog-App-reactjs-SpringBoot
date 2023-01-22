package com.example.api.controller;


import com.example.api.model.User;
import com.example.api.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private userService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public User registerUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user){
        return userService.LoginUser(user);
    }

    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newuser , @PathVariable String id){
             return userService.updateUser(newuser, id);
    }

    @DeleteMapping("/delete/{id}")
     String deleteTheUser(@RequestBody User user , @PathVariable String id){
         return userService.deleteUser(user,id);
    }

    @GetMapping("/{id}")
    public Optional<User> getUser(@PathVariable String id){

        return userService.getUserById(id);
    }

}
