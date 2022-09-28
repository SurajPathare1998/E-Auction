package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.NotifyMessageRepository;
import com.example.demo.pojos.NotifyMessage;

@Service
@Transactional
public class NotifyMessageServiceImpl implements INotifyMessageService {
	
	@Autowired
	private NotifyMessageRepository messageRepo;

	@Override
	public List<NotifyMessage> getAllMessagesByUserid(int userid) {
		if(messageRepo.existsNotifyMessageByUserid(userid)) {
			return messageRepo.findByUseridOrderByMessageidDesc(userid);
		}
		return messageRepo.findByUseridOrderByMessageidDesc(userid);
	}

	@Override
	public String saveMessage(NotifyMessage message) {
		NotifyMessage m = messageRepo.save(message);
		if(m.getMessageid() == message.getMessageid()) {
			return "can't send message";
		}
		return "message sent";
	}

}
