package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.NotifyMessage;
import com.example.demo.service.NotifyMessageServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/mes")
@Validated
public class NotifyMessageController {
	
	public NotifyMessageController() {
		System.out.println("notify message controller constructor");
	}
	
	@Autowired
	private NotifyMessageServiceImpl messageService;
	
	@GetMapping("/{userid}")
	public List<NotifyMessage> getAllMessagesByUserid(@PathVariable int userid){
		return messageService.getAllMessagesByUserid(userid);
	}
	
	@PostMapping
	public String saveMessage(@RequestBody NotifyMessage message) {
		return messageService.saveMessage(message);
	}
	
}
