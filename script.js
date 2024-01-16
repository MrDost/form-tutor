const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const uUsername = username.value.trim();
    const uEmail = email.value.trim();
    const uPassword = password.value.trim();
    const uPassword2 = password2.value.trim();

    if (uUsername != '') {
        setSuccessFor(username);
    } else {
        setErrorFor(username, 'Enter something!!');
        return
    }

    if (uEmail != '') {
        setSuccessFor(email);
    } else {
        setErrorFor(email, 'Enter something in email too!!');
        return
    }

    if (uPassword.length > 7) {
        setSuccessFor(password);
    } else {
        setErrorFor(password, 'More symbols!');
        return
    }

    if (uPassword === uPassword2) {
        setSuccessFor(password2);
    } else {
        setErrorFor(password2, 'They dont match bro');
        return
    }

    alert('Yaaaaaay');
}

function setErrorFor(elem, message) {
    elem.parentElement.classList = 'form-item error';
    elem.parentElement.lastElementChild.innerText = message;
}

function setSuccessFor(elem) {
    elem.parentElement.classList = 'form-item success';
}