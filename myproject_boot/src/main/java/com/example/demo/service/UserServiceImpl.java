package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.custom_exception.ResourceNotFoundException;
import com.example.demo.dao.UserRepository;
import com.example.demo.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public String saveUser(User user) {
		userRepo.save(user);
		return "user Added";
	}
	
	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public User getUser(int id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid user Id" + id));
	}

	@Override
	public User authenticate(User user) {
		return userRepo.getUserByMailAndPassword(user.getMail(),user.getPassword());
	}

	@Override
	public String deleteUser(int id) {
		userRepo.deleteById(id);
		return "User Removed";
	}

}
