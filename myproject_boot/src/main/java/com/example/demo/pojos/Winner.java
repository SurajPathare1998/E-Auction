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
@Table(name = "auction_winner")
public class Winner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "winner_id")
	@JsonProperty("winner_id")
	private Integer winnerid;
	
	@Column(name = "product_id")
	@JsonProperty("product_id")
	private Integer productid;
	
	@Column(name = "seller_id")
	@JsonProperty("seller_id")
	private Integer sellerid;
	
	@Column(name = "buyer_id")
	@JsonProperty("buyer_id")
	private Integer buyerid;
	
	@Column(name = "win_date")
	@JsonProperty("win_date")
	private LocalDate win_date;
	
	@Range(min = 1,message = "invalid Amount")
	@Column(name = "amount")
	@JsonProperty("amount")
	private double amount;

	public Integer getWinnerid() {
		return winnerid;
	}

	public void setWinnerid(Integer winnerid) {
		this.winnerid = winnerid;
	}

	public Integer getProductid() {
		return productid;
	}

	public void setProductid(Integer productid) {
		this.productid = productid;
	}

	public Integer getSellerid() {
		return sellerid;
	}

	public void setSellerid(Integer sellerid) {
		this.sellerid = sellerid;
	}

	public Integer getBuyerid() {
		return buyerid;
	}

	public void setBuyerid(Integer buyerid) {
		this.buyerid = buyerid;
	}

	public LocalDate getWin_date() {
		return win_date;
	}

	public void setWin_date(LocalDate win_date) {
		this.win_date = win_date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Winner [winnerid=" + winnerid + ", productid=" + productid + ", sellerid=" + sellerid + ", buyerid="
				+ buyerid + ", win_date=" + win_date + ", amount=" + amount + "]";
	}
	
}
