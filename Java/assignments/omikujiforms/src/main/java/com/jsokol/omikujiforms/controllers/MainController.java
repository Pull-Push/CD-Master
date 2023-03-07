package com.jsokol.omikujiforms.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	@RequestMapping("")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(value = "/info", method=RequestMethod.POST)
		public String info(HttpSession session, @RequestParam(value="number")String number,
				@RequestParam(value="city") String city,
				@RequestParam(value="person")String person,
				@RequestParam(value="job")String job,
				@RequestParam(value="thing")String thing,
				@RequestParam(value="nice")String nice) {
		
				session.setAttribute("number", number);
				session.setAttribute("city", city);
				session.setAttribute("person", person);
				session.setAttribute("job", job);
				session.setAttribute("thing", thing);
				session.setAttribute("nice", nice);

			return "redirect:/show";
		}
	
	@RequestMapping("/show")
	public String show(HttpSession session, Model model) {
		model.addAttribute("number", session.getAttribute("number"));
		model.addAttribute("city", session.getAttribute("city"));
		model.addAttribute("person", session.getAttribute("person"));
		model.addAttribute("job", session.getAttribute("job"));
		model.addAttribute("thing", session.getAttribute("thing"));
		model.addAttribute("nice", session.getAttribute("nice"));

		
		return "show.jsp";
	}
}
