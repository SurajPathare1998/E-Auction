package com.example.demo.service;

import java.util.List;
import com.example.demo.pojos.Auction;


public interface IAuctionService {
	List<Auction> getAll();
	
	List<Auction> getAllByProduct(int productid);
	
	List<Auction> getAllByBider(int biderid);
	
	Auction getHighBidByProduct(int productid);
	
	Auction getAuction(int auctionid);

	Auction getAuctionByProductAndBider(int productid,int biderid);
	
	String saveAuction(Auction auctionbid);
	
	String deleteAuction(int auctionid);

}
