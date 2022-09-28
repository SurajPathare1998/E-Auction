package com.example.demo.pojos;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.FutureOrPresent;
import org.hibernate.validator.constraints.Range;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	@JsonProperty("product_id")
	private Integer productid;
	

	@Column(name = "cat_id")
	@JsonProperty("cat_id")
	private Integer catid;
	
	@Column(name = "seller_id")
	@JsonProperty("seller_id")
	private Integer sellerid;
	

	@Column(length = 30)
	@JsonProperty("name")
	private String name;


	@Column(length = 50)
	@JsonProperty("details")
	private String details;
	
	@Range(min = 1,message = "invalid Amount")
	@JsonProperty("min_bid")
	private double min_bid;
	
	@FutureOrPresent
	@JsonProperty("opening_date")
	private LocalDate opening_date;
	
	@FutureOrPresent
	@JsonProperty("closing_date")
	private LocalDate closing_date;
	
	@JsonProperty("status")
	private String status="Unsold";

	@Column(name = "img", nullable = false)
	@JsonProperty("img")
	private String img;

	public Integer getProductid() {
		return productid;
	}

	public void setProductid(Integer productid) {
		this.productid = productid;
	}

	public Integer getCatid() {
		return catid;
	}

	public void setCatid(Integer catid) {
		this.catid = catid;
	}

	public Integer getSellerid() {
		return sellerid;
	}

	public void setSellerid(Integer sellerid) {
		this.sellerid = sellerid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public double getMin_bid() {
		return min_bid;
	}

	public void setMin_bid(double min_bid) {
		this.min_bid = min_bid;
	}

	public LocalDate getOpening_date() {
		return opening_date;
	}

	public void setOpening_date(LocalDate opening_date) {
		this.opening_date = opening_date;
	}

	public LocalDate getClosing_date() {
		return closing_date;
	}

	public void setClosing_date(LocalDate closing_date) {
		this.closing_date = closing_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return "Product [productid=" + productid + ", catid=" + catid + ", sellerid=" + sellerid + ", name=" + name
				+ ", details=" + details + ", min_bid=" + min_bid + ", opening_date=" + opening_date + ", closing_date="
				+ closing_date + ", status=" + status + ", img=" + img + "]";
	}

	
	
}
//product_id | cat_id | seller_id | name |details | min_bid | opening_date | closing_date | status