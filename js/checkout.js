
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress"); 
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword"); 
	var errorPhone = document.getElementById("errorPhone"); 
	
	const fields = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];
	const errors = [errorName, errorEmail, errorAddress, errorLastN, errorPassword, errorPhone];

	fields.forEach(field => {
		field.style.borderColor = "";
	});
	errors.forEach(errorMsg => {
		errorMsg.style.display = "none";
	});

	// Validate fields entered by the user: name, phone, password, and email
	let letterPattern = /^[A-Za-z]+$/;
	if(fName.value == "" || fName.value.length < 3 || !letterPattern.test(fName.value)){
		errorName.style.display = "block";
		fName.style.borderColor = "red";
		error++;
	}

	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(fEmail.value == "" || fName.value.length < 3 || !emailPattern.test(fEmail.value)){
		errorEmail.style.display = "block";
		fEmail.style.borderColor = "red";
		error++;
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		errorAddress.style.display = "block";
		fAddress.style.borderColor = "red";
		error++;
	}

	if(fLastN.value == "" || fLastN.value.length < 3 || !letterPattern.test(fLastN.value)){
		errorLastN.style.display = "block";
		fLastN.style.borderColor = "red";
		error++;
	}

	let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
	if(fPassword.value == "" || fPassword.value.length < 3 || !passwordPattern.test(fPassword.value)){
		errorPassword.style.display = "block";
		fPassword.style.borderColor = "red";
		error++;
	}

	let numberPattern = /^\d{9}$/;
	if(fPhone.value == "" || fPhone.value.length < 3 || !numberPattern.test(fPhone.value)){
		errorPhone.style.display = "block";
		fPhone.style.borderColor = "red";
		error++;
	}
	 
	if(error > 0){
		event.preventDefault();
	}
}
