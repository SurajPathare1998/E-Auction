package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.WinnerRepository;
import com.example.demo.pojos.Winner;

@Service
@Transactional
public class WinnerServiceImpl implements IWinnerService {

	@Autowired
	private WinnerRepository winnerRepo;
	
	@Override
	public String addWinner(Winner winner) {
		Winner w = winnerRepo.save(winner);
		if(w.getProductid() == winner.getProductid()) {
			return "Winner Declared";
		}
		return "Winner Already Exists";
	}

	@Override
	public List<Winner> getAllWinner() {
		return winnerRepo.findAll();
	}

	@Override
	public Winner getWinnerByProduct(int product_id) {
		Winner w = winnerRepo.getFirstWinnerByProductid(product_id);
		if(w != null) {
			return w;
		}
		return null;
	}

	@Override
	public List<Winner> getWinnerByUser(int buyer_id) {
		return winnerRepo.findAllByBuyerid(buyer_id);
	}

	@Override
	public Winner getWinnerById(int winner_id) {
		return winnerRepo.getWinnerByWinnerid(winner_id);
	}

}
