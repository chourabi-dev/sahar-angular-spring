package com.sahar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.entities.Department;
import com.sahar.repositories.DepartmentRepository;

@RestController
@RequestMapping("/departments")
@CrossOrigin(origins = "*", maxAge = 3600)
public class DepartmentController {

	@Autowired
	DepartmentRepository departmentRepository;
	
	
	@PostMapping("/add")
	Department add( @RequestBody Department d ) {
		return this.departmentRepository.save(d);
	}
	
	@GetMapping("/list")
	List<Department> list() {
		return this.departmentRepository.findAll();
	}
}
