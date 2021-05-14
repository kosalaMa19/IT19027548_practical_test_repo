//EVENT HANDLER TO PLACE AN ORDER
$(document).on("click", "#btnSave", function(event){ 
	
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
 
	 
	// Form validation-------------------
	var status = validateOrderForm(); 
	if (status != true) 
	 { 
	 $("#alertError").text(status); 
	 $("#alertError").show(); 
	 
 return; 
} 


// If valid------------------------
var type = ($("#hideOrderIDSave").val() == "") ? "POST" : "PUT"; 
	$.ajax( 
	{ 
	 url : "OrderAPI", 
	 type : type, 
	 data : $("#formOrder").serialize(), 
	 dataType : "text", 
	 complete : function(response, status) { 
		 
		 onOrderSaveComplete(response.responseText, status); 
	 } 
	}); 
});

//FUNCTION TO SAVE ORDER INFORMATION
function onOrderSaveComplete(response, status){ 
	if (status == "success") {
		
		 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") { 
			 
			 $("#alertSuccess").text("Successfully saved."); 
			 $("#alertSuccess").show(); 
			 $("#divOrderGrid").html(resultSet.data); 
		 } 
		 else if (resultSet.status.trim() == "error") {
			 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		 } 
	} 
	else if (status == "error") { 
		
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show(); 
	} else{ 
		
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
		}
	$("#hideOrderIDSave").val(""); 
	$("#formOrder")[0].reset(); 
}



// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event){ 
		
		 $("#hideOrderIDSave").val($(this).data("userid")); 
		 $("#buyerID").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#ProductID").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#Qty").val($(this).closest("tr").find('td:eq(3)').text()); 

		 
});

//EVENT HANDLER TO DELETE ORDER
$(document).on("click", ".btnRemove", function(event) { 
	 $.ajax( 
	 { 
	 	url : "OrderAPI", 
	 	type : "DELETE", 
	 	data : "orderID=" + $(this).data("userid"),
	 	dataType : "text", 
	 	complete : function(response, status) { 
	 		onOrderDeleteComplete(response.responseText, status); 
	 	} 
	}); 
})
	
// FUNCTION TO DELETE AN ORDER
function onOrderDeleteComplete(response, status){
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response); 
			if (resultSet.status.trim() == "success"){
			
				$("#alertSuccess").text("Successfully deleted."); 
				$("#alertSuccess").show(); 
				$("#divOrderGrid").html(resultSet.data); 
				
			} else if (resultSet.status.trim() == "error") { 
				
				$("#alertError").text(resultSet.data); 
				$("#alertError").show(); 
		} 
	} 
	else if (status == "error") { 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} 
	else { 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
}


function validateOrderForm() 
{ 
// PRODUCT ID
if ($("#ProductID").val().trim() == "") 
 { 
 return "Insert product ID."; 
 } 
// BUYER ID
if ($("#buyerID").val().trim() == "") 
 { 
 return "Insert Buyer ID."; 
 } 9
// QUANTITY-------------------------------
if ($("#Qty").val().trim() == "") 
 { 
 return "Insert Quantity."; 
 } 
// is numerical value
var tmpQty = $("#Qty").val().trim(); 
if (!$.isNumeric(tmpQty)) 
 { 
 return "Insert a numerical value for Qty."; 
 } 

return true; 
}


