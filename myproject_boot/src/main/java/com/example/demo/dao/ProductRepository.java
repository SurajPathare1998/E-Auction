package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	public List<Product> findAllByOrderByStatusDesc();
	
	public List<Product> findByName(String name);
	
	public List<Product> findBySellerid(Integer sellerid);
	
	public List<Product> findByCatid(Integer catid);
}
