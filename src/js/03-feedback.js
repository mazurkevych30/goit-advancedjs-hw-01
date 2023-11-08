

import { common } from "./common";
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const feedback = JSON.parse(localStorage.getItem(common.LS_FEEDBACK)) ?? {};
if (Object.keys(feedback).length) {
    form[0].value = feedback.email;
    form[1].value = feedback.message;
}

form.addEventListener("input", throttle(handlerInput, 500, {
    leading: false,
}));
form[2].addEventListener("click", onClick)


function onClick(evt) {
    evt.preventDefault();

    console.log(feedback);
    localStorage.removeItem(common.LS_FEEDBACK);
    form.reset();
}

function handlerInput(evt) {

    switch (evt.target.name) {
        case "email":
            feedback.email = evt.target.value;
            break;
        case "message":
            feedback.message = evt.target.value;
    }
    
    localStorage.setItem(common.LS_FEEDBACK, JSON.stringify(feedback));
}

