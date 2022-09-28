package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.custom_exception.ResourceNotFoundException;
import com.example.demo.dao.CategoryRepository;
import com.example.demo.pojos.Category;

@Service
@Transactional
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public List<Category> getAllCategory() {
		return categoryRepo.findAll();
	}

	@Override
	public Category getCategory(int Catid) {
		return categoryRepo.findById(Catid).orElseThrow(() -> new ResourceNotFoundException("category not found"));
	}

	@Override
	public String addCategory(Category category) {
		categoryRepo.save(category);
		return "Category Added";
	}

	@Override
	public String deleteCategory(int Cat_id) {
		if(categoryRepo.existsById(Cat_id)) {
			categoryRepo.deleteById(Cat_id);
			return "Catgory Deleted";
		}
		return "Category Not Found";
	}

}
