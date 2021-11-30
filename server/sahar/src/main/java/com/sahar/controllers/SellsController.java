package com.sahar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sahar.entities.Product;
import com.sahar.entities.Sells;
import com.sahar.models.ListSellsModel;
import com.sahar.models.ProductModel;
import com.sahar.models.SellsModel;
import com.sahar.response.ReponseModel;
import com.sahar.service.SellsService;

@RestController
@RequestMapping("/sells")
@CrossOrigin(origins = "*", maxAge = 3600)

public class SellsController {

	@Autowired
	SellsService sellsService;
	
	
	// add new product !! INSERT
	@PostMapping("/add-many")
	ReponseModel createTransactions( @RequestBody  List<SellsModel> tmp ) {
		 
		int inserted = 0;
		int notInserted = 0;
		
		
		for( SellsModel s:tmp ) {
			
			try {
				Sells sell = new Sells();
				
				sell.setClient( this.sellsService.getClientRepository().findById(s.getClient()).get() );
				sell.setProduct(this.sellsService.getPr().findById(s.getProduct()).get());
				sell.setQuantity(s.getQuantity()); 
				 
				this.sellsService.getSr().save(sell);
				inserted++;
				
				Product p = this.sellsService.getPr().findById(s.getProduct()).get();
				
				p.setQuantity( p.getQuantity() - s.getQuantity() );
				
				this.sellsService.getPr().save(p);
				
				
			}catch(Exception e) {
				notInserted++;
			}
		}
		
		
		ReponseModel res= new ReponseModel();
		res.setSuccess(true);
		res.setMessage(inserted+" trnsaction occured ");
		
		return res;
	}
	 
}
