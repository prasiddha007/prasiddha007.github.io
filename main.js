document.getElementById('myForm').addEventListener('submit', function (event) {
	event.preventDefault();
	let userEmail = document.getElementById('email').value;

	let userPassword = document.getElementById('password').value;
	alert('Email: ' + userEmail + ' and Password: ' + userPassword);
});
