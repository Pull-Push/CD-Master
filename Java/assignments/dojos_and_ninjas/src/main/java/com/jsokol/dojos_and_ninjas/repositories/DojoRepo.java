package com.jsokol.dojos_and_ninjas.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.jsokol.dojos_and_ninjas.models.Dojo;

public interface DojoRepo extends CrudRepository<Dojo, Long>{
	ArrayList<Dojo> findAll();

}
