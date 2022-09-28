package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.pojos.Winner;
import com.example.demo.service.WinnerServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/winner")
@Validated
public class WinnerController {

	public WinnerController() {
		System.out.println("Winner Controller Constructor");
	}
	
	@Autowired
	private WinnerServiceImpl winnerService;
	
	@GetMapping
	public List<Winner> getAllWinners() {
		return winnerService.getAllWinner();
	}
	
	@GetMapping("/{winner_id}")
	public Winner getWinnerById(@PathVariable int winner_id) {
		return winnerService.getWinnerById(winner_id);
	}
	
	@PostMapping
	public String saveWinner(@RequestBody Winner winner) {
		return winnerService.addWinner(winner);
	}
	
	@GetMapping("/product/{product_id}")
	public Winner getWinnerByProduct(@PathVariable int product_id) {
		return winnerService.getWinnerByProduct(product_id);
	}
	
	@GetMapping("/buyer/{buyer_id}")
	public List<Winner> getWinnerByBuyer(@PathVariable int buyer_id) {
		return winnerService.getWinnerByUser(buyer_id);
	}

}
