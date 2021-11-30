package com.sahar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sahar.repositories.ClientsRepository;
import com.sahar.repositories.ProductRepository;
import com.sahar.repositories.SellsRepo;

@Service
public class SellsService {

	
	@Autowired
	ClientsRepository clientRepository;
	
	@Autowired
	ProductRepository pr;
	
	@Autowired
	SellsRepo sr;

	public ClientsRepository getClientRepository() {
		return clientRepository;
	}

	public ProductRepository getPr() {
		return pr;
	}

	public SellsRepo getSr() {
		return sr;
	}
	
	
	
}
