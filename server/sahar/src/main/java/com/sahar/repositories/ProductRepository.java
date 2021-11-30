package com.sahar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sahar.entities.Product;

public interface ProductRepository  extends JpaRepository <Product,Long> {
   
	public List<Product> findByNameLike(String name);
	
	//public List<Product>
	
	/**
	 * @Query("select p from Product p where p.price = ?1")
	Product findByPrice();
	 */
}
