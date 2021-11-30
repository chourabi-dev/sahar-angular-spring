package com.sahar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sahar.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
