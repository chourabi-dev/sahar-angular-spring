package com.sahar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.entities.Employee;
import com.sahar.entities.Product;
import com.sahar.models.EmployeeModel;
import com.sahar.repositories.DepartmentRepository;
import com.sahar.repositories.EmployeeRepository;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "*", maxAge = 3600)

public class EmployeeController {

	
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	
	@Autowired
	EmployeeRepository er;
	
	
	
	@PostMapping("/add")
	Employee add(@RequestBody EmployeeModel e) {
		Employee employee = new Employee();
		
		employee.setDepartment(this.departmentRepository.findById(e.getDepartment()).get());
		employee.setFullname(e.getFullname());
		employee.setEmail(e.getEmail());
		
		
		return this.er.save(employee);
	}
	
	
	@GetMapping("/list")
	List<Employee> getAll() {
		return this.er.findAll();
	}
	
	
}
