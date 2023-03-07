package com.jsokol.loginregistration.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.jsokol.loginregistration.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	Optional<User> findByEmail(String email);
}
