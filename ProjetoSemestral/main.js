const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validateLogin() {
	const username = document.getElementById('loginUsername').value;
	const password = document.getElementById('loginPassword').value;
	// var formulario = document.getElementById('loginForm');

	if (username === '' || password === '') {
		alert('Por favor, preencha todos os campos.');
	} else {
		alert('Login realizado com sucesso!');
	}
	// formulario.reset();
}

function validateSignup() {
	const username = document.getElementById('signupUsername').value;
	const email = document.getElementById('signupEmail').value;
	const password = document.getElementById('signupPassword').value;
	const confirmPassword = document.getElementById('signupConfirmPassword').value;

	if (username === '' || email === '' || password === '' || confirmPassword === '') {
		alert('Por favor, preencha todos os campos.');
	} else if (password !== confirmPassword) {
		alert('As senhas não coincidem.');
	} else {
		alert('Cadastro realizado com sucesso!');
	}

}