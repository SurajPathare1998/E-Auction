package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.custom_exception.ResourceNotFoundException;
import com.example.demo.dao.ProductRepository;
import com.example.demo.pojos.Product;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {
	
	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAllByOrderByStatusDesc();
	}

	@Override
	public Product getProductById(int productid) {
		return productRepo.findById(productid).orElseThrow(()-> new ResourceNotFoundException("invalid product"));
	}

	@Override
	public List<Product> getProductByName(String name) {
		return productRepo.findByName(name);
	}

	@Override
	public List<Product> getProductByCategory(int catid) {
		return productRepo.findByCatid(catid);
	}

	@Override
	public String saveProduct(Product product) {
		productRepo.save(product);
		return "product Added";
	}

	@Override
	public String deleteProduct(int product_id) {
		if(productRepo.existsById(product_id)) {
			productRepo.deleteById(product_id);
			return "deleted Successfully";
		}
		return "delete process failed";
	}

	@Override
	public List<Product> getProductsBySeller(int seller_id) {
		return productRepo.findBySellerid(seller_id);
	}

}

	

