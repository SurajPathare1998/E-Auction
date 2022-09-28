package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "category")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cat_id")
	@JsonProperty("cat_id")
	private  Integer catid;
	
	@Column(name = "cat_name",length = 20)
	@JsonProperty("cat_name")
	private String catname;

	public Integer getCatid() {
		return catid;
	}

	public void setCatid(Integer catid) {
		this.catid = catid;
	}

	public String getCatname() {
		return catname;
	}

	public void setCatname(String catname) {
		this.catname = catname;
	}

	@Override
	public String toString() {
		return "Category [catid=" + catid + ", catname=" + catname + "]";
	}


	public boolean equals(Category other) {
		return this.getCatname().equals(other.getCatname());
	}
	
	
}
