package com.jsokol.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")

public class daikichicontroller {
	@RequestMapping("")
		public String index() {
			return "Welcome!";
		}
	
	@RequestMapping("/today")
		public String today() {
			return "Today you will find luck in all your endeavors!";
	}
	
	@RequestMapping("/tomorrow")
		public String tomorrow() {
			return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@RequestMapping("/travel/{location}")
		public String travel(@PathVariable("location") String location) {
			return "Congrats! You will soon travel to " + location;
	}
	@RequestMapping("/greeting/{firstName}/{lastName}")
		public String greeting(@PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName) {
			return "Hello " + firstName + " " + lastName + " it is good to see you!";
	}
	
	@RequestMapping("/dinner/{food}")
		public String dinner(@PathVariable("food") String food) {
			return "Tonight I want " + food + " for dinner";
	}
	
	@RequestMapping("/lotto/{number}")
		public String lotto(@PathVariable("number")int number) {	
		
		if(number % 2 == 0) {
				return "You will take a grand journey in the near future, but be wary of tempting offers";
			}
		else 
				return "You have enjoyed the fruits of your labor, but now is a good time to spend with family and friends";
	}
}

