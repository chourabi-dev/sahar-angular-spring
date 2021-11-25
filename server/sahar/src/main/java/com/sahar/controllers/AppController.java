package com.sahar.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.models.EmployeeModel;

@RestController
@RequestMapping("/app")
public class AppController {
	
	
	
	@GetMapping("/hello")
	String sayHello() {
		return "hello world";
	}
	
	@GetMapping("/somme")
	int sommme(@RequestParam( name="x", required = true ) int x,@RequestParam( name="y", required = true ) int y) {
		
		return (x+y);
		
	}
	
	
	@GetMapping("/users/{id}")
	String getUserById( @PathVariable() int id ) {
		
		return "getting user N° "+(id);
		
	}
	
	
	@PostMapping("/employee/add")
	void addEmployee( @RequestBody EmployeeModel tmp  ) {
		 System.out.println( tmp.getFullname() );
	}
	
	
	
	
}
