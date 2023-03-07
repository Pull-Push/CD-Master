<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>All Dojos</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<h1>All Dojos</h1>
	<ul>
		<c:forEach var="dojo" items="${allDojos}">
			<li><a href="/dojos/${dojo.id}"><c:out value="${dojo.name}" /></a></li>
		</c:forEach>
	</ul>
	<a href="/create/dojo">Create Dojo</a>
	<a href="/create/ninja">Create Ninja</a>

</body>
</html>