package com.example.demo.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
@Transactional
public class ProductImageServiceImpl implements IProductImageService {

	@Override
	public String uploadImg(String path, MultipartFile file) throws IOException {
		
		//file name
		String name = file.getOriginalFilename();
		
		//random name generation
		String randomId = UUID.randomUUID().toString();
		String newname =randomId +  name.substring(name.lastIndexOf('.'));
	
		//file full path
		String filepath =path + File.separator + newname
				;
		
		//create folder if not created
		File f = new File(path);
		if(!f.exists()) {
			f.mkdir();
		}
		
		//file copy
		Files.copy(file.getInputStream(), Paths.get(filepath));
		
		return newname;
	}

	@Override
	public InputStream getImg(String path, String filename) throws FileNotFoundException {
		String fullpath = path + File.separator + filename;
		
		InputStream stream = new FileInputStream(fullpath);
		
		return stream;
		
	}

}
