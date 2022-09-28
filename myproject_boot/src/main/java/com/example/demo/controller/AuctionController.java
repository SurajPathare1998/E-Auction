package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.pojos.Auction;
import com.example.demo.service.IAuctionService;
//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/bid")
@Validated
public class AuctionController {
	
	@Autowired
	private IAuctionService auctionservice;
	
	public AuctionController() {
		System.out.println("auction controller constructor");
	}
	
	@GetMapping
	public List<Auction> getAll(){
		return auctionservice.getAll();
	}
	
	@PostMapping
	public String saveAuction(@RequestBody Auction auction) {
		return auctionservice.saveAuction(auction);
	}
	
	@GetMapping("/product/{product_id}")
	public Auction getHighbidByProduct(@PathVariable int product_id){
		return auctionservice.getHighBidByProduct(product_id);
	}
	
	@GetMapping("/getallbyprod/{product_id}")
	public List<Auction> getAllByProduct(@PathVariable int product_id){
		return auctionservice.getAllByProduct(product_id);
	}
	
	@GetMapping("/bider/{bider_id}")
	public List<Auction> getAllBiderbids(@PathVariable int bider_id){
		return auctionservice.getAllByBider(bider_id);
	}
	
	@GetMapping("/productandbider/{product_id}/{bider_id}")
	public Auction getAuctionByProductAndBider(@PathVariable int product_id , @PathVariable int bider_id){
		return auctionservice.getAuctionByProductAndBider(product_id, bider_id);
	}
	
	@GetMapping("/{auction_id}")
	public Auction getbid(@PathVariable int auction_id){
		return auctionservice.getAuction(auction_id);
	}
	
	@DeleteMapping("/{auction_id}")
	public String deletebid(@PathVariable int auction_id){
		return auctionservice.deleteAuction(auction_id);
	}
	
}
