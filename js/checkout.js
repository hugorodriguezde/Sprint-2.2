
// Exercise 6
function validate(event) {
	event.preventDefault();
	var error = 0;
	// Get the input fields
	var fName = document.getElementById('fName');
	var fEmail = document.getElementById('fEmail');
	var fAddress = document.getElementById('fAddress');
	var fLastN = document.getElementById('fLastN');
	var fPassword = document.getElementById('fPassword');
	var fPhone = document.getElementById('fPhone');

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  
	

	// Validate fields entered by the user: name, phone, password, and email
	if(!/^[a-zA-Z]+$/.test(fName.value.trim()) || fName.value == "" || fName.value.length < 3){
		error++;
		fName.classList.add('is-invalid');
	}
	else {
	
		fName.classList.remove('is-invalid');
	}

	if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(fEmail.value.trim()) || fEmail.value == "" || fEmail.value.length < 3)
	{
		error++;
		fEmail.classList.add('is-invalid');
	}
	else {
		fEmail.classList.remove('is-invalid');
	}

	if(fAddress.value == "" || fAddress.value.length < 3){

		error++;
		fAddress.classList.add('is-invalid')
	}
	else {
		fAddress.classList.remove('is-invalid');
	}

	if((!/^[a-zA-Z]+$/.test(fLastN.value.trim()) || fLastN.value == "" || fLastN.value.length < 3)){
		error++;
		fLastN.classList.add('is-invalid');
	}
	else {
		fLastN.classList.remove('is-invalid')
	}

	if(!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(fPassword.value.trim()) || fPassword.value == "" || fPassword.value.length < 3){
		error++;
		fPassword.classList.add('is-invalid');
	}
	else {
		fPassword.classList.remove('is-invalid');
	}

	if(!/^[0-9]+$/.test(fPhone.value.trim()) || fPhone.value == "" || fPhone.value.length < 3){
		error++;
		fPhone.classList.add('is-invalid');
	}
	else {
		fPhone.classList.remove('is-invalid');
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}