package com.jsokol.loginregistration.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.jsokol.loginregistration.models.User;
import com.jsokol.loginregistration.models.logUser;
import com.jsokol.loginregistration.repositories.UserRepository;
@Service
public class LoginService {
	@Autowired

	private UserRepository repo;

	public User getUser(logUser user, BindingResult result) {

		Optional<User> potLogin = repo.findByEmail(user.getEmail());

		if (result.hasErrors()) {
			return null;
		}

		if (!potLogin.isPresent()) {
			result.rejectValue("email", "email", "User not found, Please register an account");
			return null;

		}
		if (!BCrypt.checkpw(user.getPassword(), potLogin.get().getPassword())) {
			result.rejectValue("password", "password", "Invalid Password");
			return null;
		}
		User verifiedUser = potLogin.get();
		return verifiedUser;

	}

}
