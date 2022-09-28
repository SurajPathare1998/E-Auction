package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.Winner;

public interface IWinnerService {
	
	String addWinner(Winner winner);
	
	List<Winner> getAllWinner();
	
	Winner getWinnerById(int winner_id);
	
	Winner getWinnerByProduct(int product_id);
	
	List<Winner> getWinnerByUser(int buyer_id);
	
}
