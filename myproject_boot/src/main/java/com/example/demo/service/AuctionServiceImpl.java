package com.example.demo.service;


import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.custom_exception.ResourceNotFoundException;
import com.example.demo.dao.AuctionRepository;
import com.example.demo.pojos.Auction;

@Service
@Transactional
public class AuctionServiceImpl implements IAuctionService {

	@Autowired
	private AuctionRepository auctionRepo;
	
	@Override
	public List<Auction> getAll() {
		return auctionRepo.findAll();
	}

	@Override
	public List<Auction> getAllByProduct(int productid) {
		return auctionRepo.findAuctionByProductid(productid);
	}

	

	@Override
	public Auction getAuction(int auctionid) {
		return auctionRepo.findById(auctionid).orElseThrow(() -> new ResourceNotFoundException("inavlid auction id"));
	}

	@Override
	public String saveAuction(Auction auctionbid) {
		Auction a = auctionRepo.save(auctionbid);
		if(a == null) {
			return "auction registration failed";
		}
		return "Bid Registered";
	}


	@Override
	public String deleteAuction(int auctionid) {
		if(auctionRepo.existsById(auctionid)) {
			auctionRepo.deleteById(auctionid);
			return "auction deleted successfully.";
		}
		return "auction delete failed";
	}

	@Override
	public List<Auction> getAllByBider(int biderid) {

		return auctionRepo.findAuctionByBiderid(biderid);
	}

	@Override
	public Auction getHighBidByProduct(int productid) {
		return auctionRepo.getFirstAuctionByProductidOrderByBidamountDesc(productid);
	}

	@Override
	public Auction getAuctionByProductAndBider(int productid, int biderid) {
		return auctionRepo.getFirstAuctionByProductidAndBiderid(productid, biderid);
	}
	
}
