package com.jsokol.savetravels.controllers;

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

import com.jsokol.savetravels.models.Expense;
import com.jsokol.savetravels.services.ExpenseService;

@Controller
public class MainController {
	@Autowired
	ExpenseService exSer;

	@GetMapping("/")
	public String index(@ModelAttribute("expfo") Expense expense, Model model) {
		ArrayList<Expense> expenses = exSer.allExpenses();
		model.addAttribute("expenses", expenses);
		model.addAttribute("expense", new Expense());
		return "/index.jsp";
	}

	@PostMapping("/create")
	public String create(@Valid @ModelAttribute("expfo") Expense expense, BindingResult result,Model model) {
		if (result.hasErrors()){
			System.out.println(result);
			ArrayList<Expense> expenses = exSer.allExpenses();
			model.addAttribute("expenses", expenses);
			
			model.addAttribute("expense", new Expense());
			
			return "index.jsp";
		}
		exSer.createOrSaveExpense(expense);
		return "redirect:/";
	}

	@GetMapping("/edit/{id}")
	public String edit(@ModelAttribute("expfo") Expense expense, @PathVariable("id")Long id,Model model) {
		Expense expfo = exSer.findExpense(id);
		model.addAttribute("expfo", expfo);
		System.out.println(expfo.getExpenseName());
		return "edit.jsp";
	}
	@PostMapping("/edit/{id}")
	public String edit(@Valid @ModelAttribute("expfo") Expense expense, BindingResult result,@PathVariable("id")Long id, Model model) {
		if (result.hasErrors()){
			System.out.println("edit errors"+result);
			model.addAttribute("single", new Expense());
			
			return "edit.jsp";
		}
		exSer.createOrSaveExpense(expense);
		return "redirect:/";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id")Long id) {
		Expense exp = exSer.delete(id);
		return "redirect:/";
		
	}
	@GetMapping("/expenses/{id}")
	public String viewOne(@PathVariable("id")Long id, Model model) {
		Expense expense = exSer.findExpense(id);
		model.addAttribute("expense",expense);
		return "expenses.jsp";
	}
		
}