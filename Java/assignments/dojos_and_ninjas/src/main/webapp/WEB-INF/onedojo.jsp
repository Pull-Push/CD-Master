<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${singledojo.name}</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>
		<c:out value="${singleDojo.name}" />
		Location Ninjas
	</h1>
<table>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
		</tr>
		<c:forEach var="ninja" items="${singleDojo.ninjas}">
		<tr>
			<td><c:out value="${ninja.firstName}" /></td>
			<td><c:out value="${ninja.lastName}" /></td>
			<td><c:out value="${ninja.age}" /></td>
		</tr>
		</c:forEach>
	</table>
	<a href="/">Home</a>
</body>
</html>