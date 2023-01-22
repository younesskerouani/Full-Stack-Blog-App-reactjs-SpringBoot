package com.example.api.exception;

public class UserNotFoundException extends RuntimeException{

    public  UserNotFoundException(String id){
        super("Could not found the user with id "+id);
    }
}
