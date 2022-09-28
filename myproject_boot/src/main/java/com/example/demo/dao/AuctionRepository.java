package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Auction;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Integer> {
	List<Auction> findAuctionByProductid(Integer productid);
	
	List<Auction> findAuctionByBiderid(Integer biderid);
	
	Auction getFirstAuctionByProductidOrderByBidamountDesc(Integer productid);
	
	Auction getFirstAuctionByProductidAndBiderid(Integer productid,Integer biderid);
}
