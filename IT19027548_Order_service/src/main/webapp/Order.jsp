<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="model.Order"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="components/jquery-3.6.0.min.js"></script>
<script src="components/main.js"></script>

<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<div class="container">
<div class="row">
<div class="col-8">
<h1 class="m-3">Place an Order</h1>
<form id="formOrder" name="formOrder">
5
<!-- product ID -->
<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="lblproduct">Product ID: </span>
</div>
<input type="text" id="ProductID" name="ProductID" class="form-control form-control-sm">
</div>
<!-- Buyer ID -->
<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="lblbuyer">buyer ID: </span>
</div>
<input type="text" id="buyerID" name="buyerID" class="form-control form-control-sm">
</div>
<!-- qty -->
<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="lblqty">Qty: </span>
</div>
<input type="number" id="Qty" name="Qty" class="form-control form-control-sm">
</div>


<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hideOrderIDSave" 
 name="hideOrderIDSave" value="">
</form>
</div>
</div>
<br>

<div id="divOrderGrid">
<%
Order orderObj = new Order();
out.print(orderObj.readOrders());
%>
</div>
</div>



</body>
</html>