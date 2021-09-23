package com.praveen.customswagger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.praveen.customswagger.service.CustomSwaggerService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8080","https://praveenoruganti-swagger-ui.herokuapp.com/" })
@RequestMapping("/api/v1_0/")
public class CustomSwaggerController {

	@Autowired
	private CustomSwaggerService customSwaggerService;

	@GetMapping("/spec/{appName}")
	public String getSwaggerSpec(@PathVariable String appName) {
		String swaggerSpec = null;
		try {
			swaggerSpec = customSwaggerService.getSwaggerSpec(appName);
		} catch (Exception e) {
			swaggerSpec = "Service UnAvailable";
		}
		return swaggerSpec;
	}

	@GetMapping("/spec")
	public List<String> getAvailableSpecs() {
		List<String> fileList = null;
		try {
			fileList = customSwaggerService.getFileList();
		} catch (Exception e) {
			fileList = null;
		}

		return fileList;
	}

}
