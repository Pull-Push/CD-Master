package com.jsokol.dojos_and_ninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import com.jsokol.dojos_and_ninjas.models.Ninja;

public interface NinjaRepo extends CrudRepository<Ninja, Long> {

}
