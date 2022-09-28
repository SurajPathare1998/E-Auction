package com.example.demo.pojos;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.validator.constraints.Range;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "auction")
public class Auction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "auction_id")
	@JsonProperty("auction_id")
	private Integer auctionid;
	
	@Range(min = 1)
	@Column(name = "product_id")
	@JsonProperty("product_id")
	private Integer productid;
	
	@Range(min = 1)
	@Column(name = "bider_id")
	@JsonProperty("bider_id")
	private Integer biderid;
	
	@Column(name = "bid_amount")
	@JsonProperty("bid_amount")
	private double bidamount;
	
	@Column(name = "req_date")
	@JsonProperty("req_date")
	private LocalDate reqdate;

	public Integer getAuctionid() {
		return auctionid;
	}

	public void setAuctionid(Integer auctionid) {
		this.auctionid = auctionid;
	}

	public Integer getProductid() {
		return productid;
	}

	public void setProductid(Integer productid) {
		this.productid = productid;
	}

	public Integer getBiderid() {
		return biderid;
	}

	public void setBiderid(Integer biderid) {
		this.biderid = biderid;
	}

	public double getBidamount() {
		return bidamount;
	}

	public void setBidamount(double bidamount) {
		this.bidamount = bidamount;
	}

	public LocalDate getReqdate() {
		return reqdate;
	}

	public void setReqdate(LocalDate reqdate) {
		this.reqdate = reqdate;
	}

	@Override
	public String toString() {
		return "Auction [auctionid=" + auctionid + ", productid=" + productid + ", biderid=" + biderid + ", bidamount="
				+ bidamount + ", reqdate=" + reqdate + "]";
	}
	
	public int compare( Auction two) {
		if(this.getBidamount() == two.getBidamount())
				return 0;
		if(this.getBidamount() == two.getBidamount())
				return -1;
		return 1;
	}
	
}
