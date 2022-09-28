package com.example.demo.pojos;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Past;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	@JsonProperty("id")
	private Integer id;
	

	@Column(length = 30)
	@JsonProperty("name")
	private String name;
	

	@Column(length = 50)
	@JsonProperty("address")
	private String address;
	
	@Column(length = 30)
	@Email
	@JsonProperty("mail")
	private String mail;
	
	@Past(message = "date of birth must be in past")
	@JsonProperty("dob")
	private LocalDate dob;
	
	@Column(length = 15)
	@JsonProperty("mobile")
	private String mobile;
	
	@Column(length = 20)
	private String password;

	@Column(name = "role" , columnDefinition = "varchar(10) default 'USER' ")
	@Enumerated(value = EnumType.STRING)
	@JsonProperty("role")
	private Role role;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", address=" + address + ", mail=" + mail + ", dob=" + dob
				+ ", mobile=" + mobile + ", role=" + role + "]";
	}
	
	
}
