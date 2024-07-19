import { getData, postData } from "../../libs/http";

let regEx = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[A-Za-z\s]+$/,
    sureName: /^[A-Za-z\s]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
};

let form = document.forms.registration
let inputs = document.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault()
    let fn = new FormData(form)

    let user = {}
    validateRegistration()
    if (validateRegistration() == false) {
        return
    } else {
        fn.forEach((value, key) => {
            user[key] = value
        })   

        getData("users")
        .then(res => console.log(res))
        .catch(error => console.log(error))

        postData("users", user)
        .then(res => {
            localStorage.setItem("userId", res.data.id)
            window.location.replace('/')
        })
        .catch(error => console.log(error))
    }
}

function validateRegistration() {
    let valid = true;
    inputs.forEach(inp => {
        let key = inp.getAttribute("name")

        if (regEx[key].test(inp.value)) {
            inp.style.border = "1px solid #000000"
        } else {
            valid = false
            inp.style.border = "1px solid red"
        }
    })
    return valid
}
