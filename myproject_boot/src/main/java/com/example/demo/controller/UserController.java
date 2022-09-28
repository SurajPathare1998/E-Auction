package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.User;
import com.example.demo.service.IUserService;

//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user")
@Validated
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	public UserController()
	{
		System.out.println("in user control constructor");
	}
	
	@GetMapping
	public List<User> listAllUsers(){
		return userService.getAllUsers(); 
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable int id){
		return userService.getUser(id);
	}
	
	@PostMapping("/login")
	public User getUserLogin(@RequestBody User user) {
		return userService.authenticate(user);
	}
	
	@PostMapping
	public String saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		return userService.deleteUser(id);
	}
	
}
