const form = document.getElementById('form1');
const form_2 = document.getElementById("form2");
const email = document.getElementById('email');
const password = document.getElementById('password');
const sign_email = document.getElementById("memail");
const fname = document.getElementById('fname');
const lname = document.getElementById("lname");
const sign_password = document.getElementById("mpassword");
const confirm_password = document.getElementById("confirm-password");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateInputs();
});


form_2.addEventListener("submit" , (e)=>{
	e.preventDefault();
	signValidator();

})




function validateInputs() {
    const emailValue = email.value.trim();
	const passwordValue = password.value;


    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!emailChecker(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
}



function signValidator(){
	const emailValue  = sign_email.value.trim()
	const passwordValue = sign_password.value;
	const confirmedPass = confirm_password.value;
	const firstName = fname.value.trim()
	const lastName = lname.value.trim()












	if(emailValue === '') {
		setErrorFor(sign_email, 'Email cannot be blank');
	} else if (!emailChecker(emailValue)) {
		setErrorFor(sign_email, 'Not a valid email');
	} else {
		setSuccessFor(sign_email);
	}



	if(passwordValue === '') {
		setErrorFor(sign_password, 'Password cannot be blank');
	} else {
		setSuccessFor(sign_password);
	}


	if(confirmedPass === '') {
		setErrorFor(confirm_password, 'Password cannot be blank');
	} else if(confirmedPass != passwordValue){
		setErrorFor(confirm_password , "Password donot match")
	}
	
	else {
		setSuccessFor(confirm_password);
	}



	if(firstName === ""){
		setErrorFor(fname , "first name is required!")	
	}else if(!nameChecker){
		setErrorFor(fname , "Invalid name!")
	}
	else{
		setSuccessFor(fname)
	}

	if(lastName === ""){
		setErrorFor(lname , "first name is required!")	
	}else if(!nameChecker){
		setErrorFor(lname , "Invalid name!")
	}
	else{
		setSuccessFor(lname)
	}

}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function emailChecker(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function nameChecker(name){
	return /^[A-Za-z]+$/.test(name)
}





