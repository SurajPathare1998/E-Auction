package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User getUserByMail(String Mail);
	
	public User getUserByMailAndPassword(String mail,String password);
}
