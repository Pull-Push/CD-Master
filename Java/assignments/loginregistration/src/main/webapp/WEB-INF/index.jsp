<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login and Registration</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>Welcome!</h1>
	<h2>Join our growing community</h2>
	<div class="container pt-5">
		<div class="row">
			<div class="col-6">
				<h2>Registration</h2>
				<form:form action="/create/user" method="POST"
					modelAttribute="newUser">
					<div class="mb-3">
						<form:label path="username"> Username:</form:label>
						<form:errors path="username" class="text-danger"> 
						</form:errors>
						<form:input path="username" type="text" class="form-control" />
					</div>
					<div class="mb-3">
						<form:label path="email"> Email:</form:label>
						<form:errors path="email" class="text-danger">
						</form:errors>
						<form:input path="email" type="email" class="form-control" />
					</div>
					<div class="mb-3">
						<form:label path="password"> Password:</form:label>
						<form:errors path="password" class="text-danger">
						</form:errors>
						<form:input path="password" type="password" class="form-control" />
					</div>
					<div class="mb-3">
						<form:label path="confirm"> Confirm Password:</form:label>
						<form:errors path="confirm" class="text-danger">
						</form:errors>
						<form:input path="confirm" type="password" class="form-control" />
					</div>
					<input type="submit" value="Submit" class="btn btn-primary"/>
				</form:form>
			</div>
			<div class="col-6">
				<h2>Login</h2>
				<form:form action="/login" method="POST"
					modelAttribute="logUser">
					<div class="mb-3">
						<form:label path="email"> Email:</form:label>
						<form:errors path="email" class="text-danger">
						</form:errors>
						<form:input path="email" type="email" class="form-control" />
					</div>
					<div class="mb-3">
						<form:label path="password"> Password:</form:label>
						<form:errors path="password" class="text-danger">
						</form:errors>
						<form:input path="password" type="password" class="form-control" />
					</div>
					<input type="submit" value="Log In" class="btn btn-primary"/>
				</form:form>
			</div>
		</div>
	</div>
</body>
</html>