package com.example.api.service;

import com.example.api.exception.UserNotAllowedToModify;
import com.example.api.exception.UserNotFoundException;
import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class userService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    // create User
    public User createUser(User user){
        user.setUserId(UUID.randomUUID().toString().split("-")[0]);
        return userRepository.save(user);
    }

    // Login
    public User LoginUser(User user1){

        String username = user1.getUsername();
        String password = user1.getPassword();
        Query query = new Query();
        query.addCriteria(Criteria.where("username").is(username));
        List<User> users = mongoTemplate.find(query, User.class);
        User user2 = users.get(0);

        if(user2.getPassword().equals(password)){
            return user2;
        }else{
            return  null;
        }

    }

     //  update User
        public User updateUser(User newuser, String id){

               if(id.equals(newuser.getUserId()) ) {

                   return userRepository.findById(id)
                           .map(user -> {
                               user.setUsername(newuser.getUsername());
                               user.setEmail(newuser.getEmail());
                               user.setPassword(newuser.getPassword());
                               user.setProfilePic(newuser.getProfilePic());
                               return userRepository.save(user);
                           }).orElseThrow(() -> new UserNotFoundException(id));
               }

               else {
                   throw new UserNotAllowedToModify(id);
               }
            }

          // Delete User
            public String deleteUser(User user,String id){

                if(id.equals(user.getUserId()) ) {
                    userRepository.deleteById(id);
                    return id + " User deleted successfully ";
                }else {
                    throw new RuntimeException("you can't Delete the other user account");
                }
            }

        //   GET USER
            public Optional<User> getUserById(String id){
                return userRepository.findById(id);
            }
}
