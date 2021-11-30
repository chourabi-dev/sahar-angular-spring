package com.sahar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.entities.Clients;
import com.sahar.entities.Department;
import com.sahar.repositories.*;
import com.sahar.repositories.DepartmentRepository;
 
@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClientController {

	@Autowired
	ClientsRepository clientRepository;
	
	
	@PostMapping("/add")
	Clients add( @RequestBody Clients c ) {
		return this.clientRepository.save(c);
	}
	
	@GetMapping("/list")
	List<Clients> list() {
		return this.clientRepository.findAll();
	}
}
