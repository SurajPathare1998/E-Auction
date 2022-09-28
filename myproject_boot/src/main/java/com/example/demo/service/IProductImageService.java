package com.example.demo.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

public interface IProductImageService {
	String uploadImg(String path, MultipartFile file) throws IOException;
	
	InputStream getImg(String path,String filename) throws FileNotFoundException;
	
}
