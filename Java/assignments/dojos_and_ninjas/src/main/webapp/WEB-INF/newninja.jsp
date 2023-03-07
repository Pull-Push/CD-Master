<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Ninja</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>Create Ninja!</h1>
	<form:form action="/create/ninja" method="post" modelAttribute="ninja">
		<form:select path="dojo">
			<c:forEach var="dojo" items="${allDojos}">
				<form:option value="${dojo.id}">${dojo.name}</form:option>
			</c:forEach>
		</form:select>
		<form:label path="firstName"> First Name:</form:label>
		<form:input path="firstName" />
		<form:label path="lastName"> Last Name:</form:label>
		<form:input path="lastName" />
		<form:label path="age"> Age:</form:label>
		<form:input path="age" />
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>