package com.jsokol.loginregistration.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class logUser {
	@NotEmpty(message="Email is required!")
	@Email(message="Please enter a valid email address")
	private String email;
	
	@NotEmpty(message="Password is required")
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}