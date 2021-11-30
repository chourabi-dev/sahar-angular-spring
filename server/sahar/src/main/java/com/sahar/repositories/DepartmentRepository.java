package com.sahar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sahar.entities.Department;

public interface DepartmentRepository extends JpaRepository<Department,Long> {

}
