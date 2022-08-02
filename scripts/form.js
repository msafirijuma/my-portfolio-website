const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;
function validateForm() {
    if (username === "" && email === "" && message === "") {
        if (username == "") {
            console.log("username is empty");
        } else if (email == "") {
            console.log("email is empty");
        } else {
            console.log("message is empty");
        }
    } else {
        console.log(username)
        console.log(email)
        console.log(message)
    }
}