import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputClick, 500));
refs.form.addEventListener('submit', onSubmitClick);
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

const feedbackFormState = {
    email: '',
    message: '',
};
function onInputClick(evt) {
    switch (evt.target.name) {
    case 'email':
        feedbackFormState.email = evt.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
    break;

    case 'message':
        feedbackFormState.message = evt.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
    break;
    }
}
function onDOMContentLoaded() {
    if (localStorage.getItem('feedback-form-state')) {
        try {
        const parsedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
        feedbackFormState.email = refs.form.elements.email.value = parsedFeedback.email;
        feedbackFormState.message = refs.form.elements.message.value = parsedFeedback.message;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
    }
}

function onSubmitClick(evt) {
    evt.preventDefault();
    console.log(feedbackFormState);
    feedbackFormState.email = '';
    feedbackFormState.message = '';
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
}
