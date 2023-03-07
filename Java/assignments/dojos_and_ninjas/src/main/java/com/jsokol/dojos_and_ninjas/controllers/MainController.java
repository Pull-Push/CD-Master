package com.jsokol.dojos_and_ninjas.controllers;

import java.util.ArrayList;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.jsokol.dojos_and_ninjas.models.Dojo;
import com.jsokol.dojos_and_ninjas.models.Ninja;
import com.jsokol.dojos_and_ninjas.services.DojoNinjaService;

@Controller
public class MainController {
	
	@Autowired
	DojoNinjaService danServ;

	@GetMapping("/")
	public String index(@ModelAttribute("dojo") Dojo dojo, Model model) {
		ArrayList<Dojo> allDojos = danServ.allDojos();
		model.addAttribute("allDojos", allDojos);
		return "index.jsp";
	}

	@GetMapping("/create/dojo")
	public String createDojo(@ModelAttribute("dojo") Dojo dojo, Model model) {
		return "newdojo.jsp";
	}
	
	@PostMapping("/create/dojo")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newddojo.jsp";
		}else {
			danServ.creatOrSave(dojo);
			return "redirect:/";
		}
	}

	@GetMapping("/create/ninja")
	public String createNinja(@ModelAttribute("ninja")Ninja ninja, Model model) {
		ArrayList<Dojo> allDojos = danServ.allDojos();
		model.addAttribute("allDojos", allDojos);
		
		Ninja newninja = new Ninja();
		model.addAttribute("ninja", newninja);
		return "newninja.jsp";
		}
	
	
	@PostMapping("/create/ninja")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newninja.jsp";
		}else {
			danServ.createOrSave(ninja);
			return "redirect:/";
		}
	}
	
	@GetMapping("dojos/{id}")
	public String viewDojo(@PathVariable("id") Long id ,Model model) {
		Dojo singleDojo = danServ.getOne(id);
		model.addAttribute("singleDojo", singleDojo);
		return "onedojo.jsp";
}			
	}

