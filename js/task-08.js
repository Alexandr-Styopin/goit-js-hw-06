const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {

    evt.preventDefault();

    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "") {
        alert('Поле email не заполненено или заполнено не верно');
    } else if (password === "") {
        alert('Поле password не заполненено или заполнено не верно');
    }
    else {
        const formData = {
            email, 
            password,
        };

        console.log(formData);

        form.reset();

    };
};