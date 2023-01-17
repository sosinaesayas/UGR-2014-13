const form = document.getElementById('form');
const fwhere = document.getElementById('fwhere');
const twhere = document.getElementById('twhere');
const depart = document.getElementById('depart');
const traveller = document.getElementById('traveller');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {
    const fwhereValue = fwhere.value.trim();
	const twhereValue = twhere.value.trim();
	const departValue = depart.value.trim();
    const travellerValue = traveller.value.trim();

    if(fwhereValue === '') {
		setErrorFor(fwhere, 'From Where cannot be blank');
	} else {
		setSuccessFor(fwhere);
	}
    if(twhereValue === '') {
		setErrorFor(twhere, 'To Where cannot be blank');
	} else {
		setSuccessFor(twhere);
	}
    if(departValue === '') {
		setErrorFor(depart, 'Depart cannot be blank');
	} else {
		setSuccessFor(depart);
	}
    if(travellerValue === '') {
		setErrorFor(traveller, 'Traveller cannot be blank');
	} else {
		setSuccessFor(traveller);
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