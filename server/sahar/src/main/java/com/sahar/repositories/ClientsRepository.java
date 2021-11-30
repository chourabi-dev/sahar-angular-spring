package com.sahar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sahar.entities.Clients;

public interface ClientsRepository extends JpaRepository<Clients,Long> {

}
