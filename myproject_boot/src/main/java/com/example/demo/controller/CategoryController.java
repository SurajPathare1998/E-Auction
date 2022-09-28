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

import com.example.demo.pojos.Category;
import com.example.demo.service.ICategoryService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/category")
@Validated
public class CategoryController {
	
	public CategoryController() {
		System.out.println("category controller constructor");
	}
	
	@Autowired
	private ICategoryService categoryService;
	
	@GetMapping
	public List<Category> getall(){
		return categoryService.getAllCategory();
	}
	
	@GetMapping("/{cat_id}")
	public Category getCategory(@PathVariable int cat_id) {
		return categoryService.getCategory(cat_id);
	}
	
	@DeleteMapping("/{cat_id}")
	public String deleteCategory(@PathVariable int cat_id) {
		return categoryService.deleteCategory(cat_id);
	}
	
	@PostMapping
	public String addCategory(@RequestBody Category category) {
		List<Category> list = categoryService.getAllCategory();
		category.setCatname(category.getCatname().toUpperCase());
		for (Category cat: list) {
			if(cat.getCatname().equals(category.getCatname())) {
				return "Category Already Exists";
			}
		}
		 return categoryService.addCategory(category);
	}
}
