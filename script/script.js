const form = document.getElementById("form");
const email = document.getElementById("email");
const notification = document.getElementById("notification");

/*
 * validate an e-mail address by leveraging the HTML5
 * input element with type "email"
 */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var input = document.createElement("input");
    input.type = "email";
    input.value = email.value;

    if (input.checkValidity() && input.value !== "") {
        email.value = "";
        return false;
    }

    email.style.border = "2px solid hsl(354, 100%, 66%)";
    notification.textContent = "Please provide a valid email.";
    return false;
});

email.addEventListener("focus", function () {
    email.style.border = "1px solid hsl(223, 87%, 63%)";
    notification.textContent = "";
});

email.addEventListener("focusout", function () {
    email.style.border = "1px solid hsl(223, 100%, 88%)";
});
