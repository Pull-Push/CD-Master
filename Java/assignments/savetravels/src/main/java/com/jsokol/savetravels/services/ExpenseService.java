package com.jsokol.savetravels.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsokol.savetravels.models.Expense;
import com.jsokol.savetravels.repositories.ExpenseRepository;



@Service
public class ExpenseService {

	@Autowired
	private ExpenseRepository exRepo;
	public ArrayList<Expense> allExpenses() {
        return exRepo.findAll();
}
	
	public Expense createOrSaveExpense(Expense expense){
        return exRepo.save(expense);
}
	
	public Expense findExpense(Long id) {
        Optional<Expense> optionalExpense = exRepo.findById(id);
        if(optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }
	public Expense delete(Long id) {
		exRepo.deleteById(id);
		return null;
    }
}