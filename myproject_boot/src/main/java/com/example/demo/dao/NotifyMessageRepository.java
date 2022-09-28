package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.NotifyMessage;

@Repository
public interface NotifyMessageRepository extends JpaRepository<NotifyMessage , Integer> {
	
	public List<NotifyMessage> findByUseridOrderByMessageidDesc(Integer userid);
	
	public boolean existsNotifyMessageByUserid(Integer userid);
}
