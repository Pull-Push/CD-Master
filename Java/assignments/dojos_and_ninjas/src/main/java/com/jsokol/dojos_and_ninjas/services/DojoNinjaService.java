package com.jsokol.dojos_and_ninjas.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsokol.dojos_and_ninjas.models.Dojo;
import com.jsokol.dojos_and_ninjas.models.Ninja;
import com.jsokol.dojos_and_ninjas.repositories.DojoRepo;
import com.jsokol.dojos_and_ninjas.repositories.NinjaRepo;

@Service
public class DojoNinjaService {

	@Autowired
	DojoRepo dRepo;

	@Autowired
	NinjaRepo nRepo;

	public ArrayList<Dojo> allDojos() {
		ArrayList<Dojo> dojos = dRepo.findAll();
		return dojos;
	}
	public ArrayList<Ninja> allNinjas(){
		ArrayList<Ninja> allNinjas = (ArrayList<Ninja>) nRepo.findAll();
		return allNinjas;
	}

	public Dojo creatOrSave(Dojo dojo) {
		return dRepo.save(dojo);
	}

	public Ninja createOrSave(Ninja ninja) {
		return nRepo.save(ninja);
	}


	public Dojo getOne(Long id) {
		Dojo singleDojo = dRepo.findById(id).orElse(null);
		return singleDojo;
	}
}
