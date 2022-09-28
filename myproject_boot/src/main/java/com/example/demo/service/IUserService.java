package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.User;

public interface IUserService {
	
	String saveUser(User user);
	
	List<User> getAllUsers();
	
	User getUser(int id);
	
	User authenticate(User user);
	
	String deleteUser(int id);
}
