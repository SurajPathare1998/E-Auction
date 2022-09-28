package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "messages")
public class NotifyMessage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "messageid")
	@JsonProperty("messageid")
	private Integer messageid;
	
	@Column(name = "userid")
	@JsonProperty("userid")
	private Integer userid;
	
	@Column(name = "message",length = 50)
	@JsonProperty("message")
	private String message;
	
	@Column(name = "sender",length = 10)
	@JsonProperty("sender")
	private String sender;

	public Integer getMessageid() {
		return messageid;
	}

	public void setMessageid(Integer messageid) {
		this.messageid = messageid;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	@Override
	public String toString() {
		return "NotifyMessage [messageid=" + messageid + ", userid=" + userid + ", message=" + message + ", sender="
				+ sender + "]";
	}
	
}
