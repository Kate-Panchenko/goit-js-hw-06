const form = document.querySelector('form.login-form');


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля мають бути заповнені!")
    } 

    const fullForm = { email: email.value, password: password.value };
    console.log(fullForm);
    event.currentTarget.reset();
};
