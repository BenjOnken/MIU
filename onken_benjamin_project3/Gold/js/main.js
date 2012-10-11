/*
Benjamin Onken
MiU 1210
.js file for additem form
*/

/*
$(document).on(function(){
	//code needed for home page goes here
});	
		*/
//getElementById function
function ge(x){
	var theElement = document.getElementById(x);
	return theElement;
}

//Find value of radio
function getSelectedRadio(){

	var radio = $('input:radio[name=typeofdive]:checked').val();

	for(var i=0; i<radio.length; i++){
		if(radio[i].checked){
		diveType = radio[i].value;
		}
	}
}
//Stores data into local storage
function storeData(key){
		//if there is no key, this means this is a brand new item and we need a new key.
		if(!key){
			var id = Math.floor(Math.random()*10000000001);
		}
		else{
		//Set the id to the existing key were editing so that it will save over the data.
		//The key is the same key thats been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storeData function.
			id = key;
		}
		//Gather all our form field values and store in an object
		//Object properties contain array with the form label and input value
		getSelectedRadio();
		var item = {};
		
		item.date = ["Date:", $('#date').val()];
		item.locationOfDive = ["Location:", $('#location').val()];
		item.typeOfDive = ["Type of Dive:", $('input[name=typeofdive]:checked', '#logdive').val()]; 
		item.depth = ["Depth:", $('#depth').val()];
		item.divesLength = ["Length:", $('#length').val()];
		item.notes = ["Notes:", $('#notes').val()];
		//save data into local storage : use Stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Dive Successfully Logged!");
}


//Validator
$('#logdive').on('pageinit',function(){
	delete $.validator.methods.date;
		var myForm = $('#divelogform');
		var errorslink = $('#errorslink');

		    myForm.validate({
		    	invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = myForm.serializeArray();
					storeData(data.key);
				}

			});
});
	
	//any other code needed for addItem page goes here

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

	var diveType;