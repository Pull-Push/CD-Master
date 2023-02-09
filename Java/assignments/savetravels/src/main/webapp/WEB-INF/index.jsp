<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SaveTravels</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>SaveTravels</h1>
	<table class="table table-striped">
		<tr>
			<td>Expense</td>
			<td>Vendor</td>
			<td>Amount</td>
			<td>Actions</td>
		</tr>
		<c:forEach var="expense" items="${expenses}">
			<tr>
				<td><a href="/expenses/${expense.id}"><c:out
							value="${expense.expenseName}" /></a></td>
				<td><c:out value="${expense.vendor}" /></td>
				<td>$<c:out value="${expense.amount}" /></td>
				<td><a href="/edit/${expense.id}">Edit</a> <a href="/delete/${expense.id}">Delete Me</a></td>
			</tr>
		</c:forEach>
	</table>
	<h1>Add An Expense</h1>
	<div class="container">
		<form:form action="/create" method="POST" modelAttribute="expfo">
			<div>
				<p><form:errors path="expenseName" class="text-danger" /></p>
				<p><form:errors path="vendor" class="text-danger" /></p>
				<p><form:errors path="amount" class="text-danger" /></p>
				<p><form:errors path="description" class="text-danger" /></p>
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
				<form:textarea path="description" />
			</div>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>