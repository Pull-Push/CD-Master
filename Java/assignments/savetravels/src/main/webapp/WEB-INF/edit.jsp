<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Expense</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>Edit Expense</h1>
	<a href="/">Go Back</a>
	<div class="container">
		<form:form action="/edit/${expfo.id}" method="POST" modelAttribute="expfo">
			<div>
				<p>
					<form:errors path="expenseName" class="text-danger" />
				</p>
				<p>
					<form:errors path="vendor" class="text-danger" />
				</p>
				<p>
					<form:errors path="amount" class="text-danger" />
				</p>
				<p>
					<form:errors path="description" class="text-danger" />
				</p>
			</div>
			<div>
				<form:label path="expenseName">Expense</form:label>
				<form:input type="text" path="expenseName"></form:input>
			</div>
			<div>
				<form:label path="vendor">Vendor</form:label>
				<form:input path="vendor"></form:input>
			</div>
			<div>
				<form:label path="amount">Amount</form:label>
				<form:input type="number" path="amount" step=".01"></form:input>
			</div>
			<div>
				<form:label path="description">Description</form:label>
				<form:textarea path="description"></form:textarea>
			</div>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>