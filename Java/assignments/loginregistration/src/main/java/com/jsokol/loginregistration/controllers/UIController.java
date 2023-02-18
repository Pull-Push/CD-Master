package com.jsokol.loginregistration.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.jsokol.loginregistration.models.User;
import com.jsokol.loginregistration.models.logUser;
import com.jsokol.loginregistration.services.LoginService;
import com.jsokol.loginregistration.services.UserService;

@Controller
public class UIController {
	@Autowired
	private UserService service;

	@Autowired
	private LoginService logServ;

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("logUser", new logUser());
		return "index.jsp";
	}

	@GetMapping("/dashboard")
	public String dash(HttpSession session, Model model) {
		if(session.getAttribute("userId")=="") {
			System.out.println("you do not have access");
			return "redirect:/";
		}
		Long currentId = (Long) session.getAttribute("userId");
		model.addAttribute("userId", currentId);
		return "dashboard.jsp";
	}

	@PostMapping("/create/user")
	public String create(@Valid @ModelAttribute("newUser") User user, BindingResult result, Model model,
			HttpSession session) {
		User potUser = service.createOrSave(user, result);
		if (potUser == null) {
			model.addAttribute("logUser", new logUser());
			return "index.jsp";
		}
		session.setAttribute("userId", potUser.getId());
		return "redirect:/dashboard/";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("logUser") logUser logUser, BindingResult result, Model model,
			HttpSession session) {

		User verifiedUser = logServ.getUser(logUser, result);
		if (verifiedUser == null) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("userId", verifiedUser.getId());
		return "redirect:dashboard/";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", "");
		return "redirect:/";
	}
}
