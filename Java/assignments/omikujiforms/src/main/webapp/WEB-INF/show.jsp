<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Omikuji Show</title>
</head>
<body>
	<div>
		<h1>Here's Your Okimuji</h1>
	</div>
	<div class="container" id="result">
		<p>In <c:out value="${number}"></c:out> years, you will be living in <c:out value="${city}"></c:out> with 
		<c:out value="${person}"></c:out> as your room mate,  <c:out value="${job}"></c:out>
		for a living. The next time you see a <c:out value="${thing}"></c:out>, you will have good luck. Also, <c:out value="${nice}"></c:out> </p>		
	</div>
	<div class="link">
		<a href="/">Go Back</a>
	</div>
</body>
</html>