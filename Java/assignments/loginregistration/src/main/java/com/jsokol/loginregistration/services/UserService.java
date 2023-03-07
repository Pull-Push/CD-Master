package com.jsokol.loginregistration.services;




import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.jsokol.loginregistration.models.User;
import com.jsokol.loginregistration.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;

	public User createOrSave(User user, BindingResult result) {

		Optional<User> newUser = repo.findByEmail(user.getEmail());

		if (result.hasErrors()) {

			return null;

		}

		if (newUser.isPresent()) {

			result.rejectValue("email", "email", "Email already exists");

			return null;

		}

		if (!user.getPassword().equals(user.getConfirm())) {

			result.rejectValue("password", "password", "Passwords must match");

			return null;

		}

		String hashedPw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());

		user.setPassword(hashedPw);

		return repo.save(user);

	}

}
