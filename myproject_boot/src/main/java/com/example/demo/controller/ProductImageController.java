package com.example.demo.controller;


import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.demo.pojos.customResponse;
import com.example.demo.service.IProductImageService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/upload")
@Validated
public class ProductImageController {
	
	public ProductImageController() {
		System.out.println("product image controller constructor");
	}
	
	@Autowired
	private IProductImageService productImgService;
	
	@Value("${project.image}")
	private String path;
	
	@PostMapping
	public ResponseEntity<customResponse> imgUpload(@RequestParam("image") MultipartFile file)
	{
			String filename;
			try {
				filename = productImgService.uploadImg(path, file);
				return new ResponseEntity<>(new customResponse("Image Uploaded",filename),HttpStatus.OK);
			} catch (IOException e) {
				return new ResponseEntity<>(new customResponse("server Problem in image upload",new Object(),e.getMessage()),HttpStatus.OK);
			}
	}
	
//	@PostMapping(headers = ("content-type=multipart/*"),consumes = org.springframework.http.MediaType.IMAGE_JPEG_VALUE)
//	public ResponseEntity<?> imgUpload(@RequestParam("image") MultipartFile file)
//	{
//			String filename;
//			try {
//				filename = productImgService.uploadImg(path, file);
//				return new ResponseEntity<>(filename,HttpStatus.OK);
//			} catch (IOException e) {
//				return new ResponseEntity<>("1b8d8633-200c-4e97-9e26-da90bca7075d.jpg",HttpStatus.OK);
//			}
//	}
	
	@GetMapping(value = "/{img}",produces = org.springframework.http.MediaType.IMAGE_JPEG_VALUE)
	public void imgDownload(@PathVariable("img") String img, HttpServletResponse response) throws IOException
	{
		InputStream resource = productImgService.getImg(path, img);
		response.setContentType(org.springframework.http.MediaType.IMAGE_JPEG_VALUE);
		StreamUtils.copy(resource,response.getOutputStream());
	}
}
