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

import com.example.demo.pojos.Product;
import com.example.demo.service.IProductService;
//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
@Validated
public class ProductController {
	
	@Autowired
	private IProductService productService;
	
	public ProductController() {
		System.out.println("Product Controller constructor");
	}
	
	@GetMapping
	public List<Product> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@DeleteMapping("/{product_id}")
	public String deleteProduct(@PathVariable int product_id) {
		return productService.deleteProduct(product_id);
	}
	
	@PostMapping
	public String saveProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}
	
	@GetMapping("/{product_id}")
	public Product getProduct(@PathVariable("product_id") int product_id) {
		return productService.getProductById(product_id);
	}
	
	@GetMapping("/seller/{seller_id}")
	public List<Product> getProductbyseller(@PathVariable int seller_id){
		return productService.getProductsBySeller(seller_id);
	}
	
	@GetMapping("/name/{name}")
	public List<Product> getProductByName(@PathVariable String name){
		return productService.getProductByName(name);
	}
	
	@GetMapping("/category/{cat_id}")
	public List<Product> getProductByCategory(@PathVariable int cat_id){
		return productService.getProductByCategory(cat_id);
	}
	
	@GetMapping("/sold/{product_id}")
	public String getProductSolded(@PathVariable int product_id) {
		Product p = productService.getProductById(product_id);
		p.setStatus("SOLD");
		return productService.saveProduct(p);
	}
}
