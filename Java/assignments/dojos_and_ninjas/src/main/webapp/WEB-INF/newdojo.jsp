<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
    <%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create Dojo</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
<h1>Create Dojo!</h1>
<form:form action="/create/dojo" method="post" modelAttribute="dojo">
<form:label path="name"> Dojo Name:</form:label>
<form:input path="name"/>
<input type="submit" value="Submit"/>
</form:form>
</body>
</html>