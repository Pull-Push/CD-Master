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
	<div>
		<h1>Expense Details</h1>
		<a href="/">Go Back</a>
	</div>
	<div class="container text-center">
		<div class="row justify-content-start">
			<div class="col g-0">
				<h4 class="text-white bg-dark">Expense:</h4>
				<h4>Vendor:</h4>
				<h4 class="text-white bg-dark me-0">Description:</h4>
				<h4>Amount:</h4>
			</div>
			<div class="col g-0">
				<h4 class="text-white bg-dark">
					<c:out value="${expense.expenseName}" />
				</h4>
				<h4>
					<c:out value="${expense.vendor}" />
				</h4>
				<h4 class="text-white bg-dark">
					<c:out value="${expense.description}" />
				</h4>
				<h4>
					$<c:out value="${expense.amount}" />
				</h4>
			</div>
		</div>
	</div>

</body>
</html>