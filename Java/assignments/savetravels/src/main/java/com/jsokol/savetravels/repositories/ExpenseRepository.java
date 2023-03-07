package com.jsokol.savetravels.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;


import com.jsokol.savetravels.models.Expense;

public interface ExpenseRepository extends CrudRepository<Expense, Long>{
    ArrayList<Expense> findAll();
}
