<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji Forms</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<h1>Send an Omikuji</h1>
	<div class="formdiv">
		<form action="/info" method="post">
			<label for="number">Pick Any Number from 5 to 25:</label>
			<input type="number" name="number"/>
			<label for="city">Name Any City:</label>
			<input type="text" name="city" />
			<label for="person">Name Any Person:</label>
			<input type="text" name="person" />
			<label for="job">Name Any Job:</label>
			<input type="text" name="job" />
			<label for="thing">Name Any Living Thing:</label>
			<input type="text" name="thing"/>
			<label for="nice">Say Something Nice:</label>
			<textarea name="nice" id="nice" cols="30" rows="10"></textarea>
			<input type="submit" name="Submit Form"/>
		</form>
	</div>
</body>
</html>