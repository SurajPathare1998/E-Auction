package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.NotifyMessage;

public interface INotifyMessageService {
	
	List<NotifyMessage> getAllMessagesByUserid(int userid);
	
	String saveMessage(NotifyMessage message);
	
}
