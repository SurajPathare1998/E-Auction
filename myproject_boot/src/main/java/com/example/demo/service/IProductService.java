package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.Product;

public interface IProductService {
	
	String saveProduct(Product product);
	
	List<Product> getAllProducts();
	
	List<Product> getProductsBySeller(int seller_id);
	
	Product getProductById(int productid);
	
	List<Product> getProductByName(String name);
	
	List<Product> getProductByCategory(int catid);
	
	String deleteProduct(int product_id);
}
