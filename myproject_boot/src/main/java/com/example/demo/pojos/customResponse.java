package com.example.demo.pojos;

public class customResponse {
	
private String message;
	
	private Object object;
	
	private String img;

	public customResponse(String message, Object object, String img) {
		super();
		this.message = message;
		this.object = object;
		this.img = img;
	}
	
	public customResponse(String message, String img) {
		super();
		this.message = message;
		this.img = img;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	
}
