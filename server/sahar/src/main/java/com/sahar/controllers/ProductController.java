package com.sahar.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.entities.Product;
import com.sahar.models.ProductModel;
import com.sahar.repositories.DepartmentRepository;
import com.sahar.repositories.ProductRepository;
import com.sahar.response.ReponseModel;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*", maxAge = 3600)

public class ProductController {

	@Autowired
	ProductRepository pr;
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	 
	// add new product !! INSERT
	@PostMapping("/add")
	Product addNewProduct( @RequestBody ProductModel tmp ) {
		Product p = new Product();
		
		p.setName(tmp.getName());
		p.setPrice(tmp.getPrice());
		p.setQuantity(tmp.getQuantity());
		
		p.setDepartment( this.departmentRepository.findById(tmp.getDepartment()).get() );
		 
		return this.pr.save(p);
	}
	 
	// get all product // SELECT *
	
	@GetMapping("/list")
	List<Product> getAll() {
		return this.pr.findAll();
	}
	
	
	@PostMapping("/update/{id}")
	ReponseModel update(@RequestBody ProductModel tmp, @PathVariable long id) {
		ReponseModel res = new ReponseModel();
		
		try {
			Product  p = this.pr.findById(id).get(); 
			p.setName(tmp.getName());
			p.setPrice(tmp.getPrice());
			p.setQuantity(tmp.getQuantity());
			p.setDepartment( this.departmentRepository.findById(tmp.getDepartment()).get() );
			 
			this.pr.save(p);
			res.setSuccess(true);
			res.setMessage("Product updated !!");
			
		}catch(Exception e ) {
			res.setSuccess(false);
			res.setMessage("Something went wrong");
		}
		
		
		return res;
	}
	
	
	@DeleteMapping("/delete/{id}")
	ReponseModel delete(@PathVariable long id) {
		ReponseModel res = new ReponseModel();
		
		try {
			Product  p = this.pr.findById(id).get();
			
			this.pr.delete(p); 
			
			res.setSuccess(true);
			res.setMessage("Product deleted !!");
			
		}catch(Exception e ) {
			res.setSuccess(false);
			res.setMessage("Something went wrong");
		}
		 
		return res;
	}
	
	@GetMapping("/find-by-id/{id}")
	ProductModel getOne(@PathVariable long id) {
		 
	Product  p = this.pr.findById(id).get();
	
	
	ProductModel res = new ProductModel();
	
	
	res.setName(p.getName());
	res.setDepartment(p.getDepartment().getId());
	res.setPrice(p.getPrice());
	res.setQuantity(p.getQuantity());
	 return res;
	 
	 
	}
	
	
	@GetMapping("/find-by-name")
	List<Product> findByName(@RequestParam( name="name", required = true ) String  name) {
		return this.pr.findByNameLike(name);
	}
	
}
