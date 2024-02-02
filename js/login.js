var email = document.form['form']['email'];
var password = document.form['form']['password'];

var email_error =  document.getElementById('email_error');
var password_error =  document.getElementById('password_error');

function validated() {
    if (email.value.length < 9 ) {
        email.style.border = " 1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false
    }

    if (password.value.length < 6 ) {
        password.style.border = " 1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false
    }
}
