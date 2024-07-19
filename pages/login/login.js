import axios from "axios";

let url = "http://localhost:8080/users"

let form = document.forms.login
let inps = document.querySelectorAll('input')
let err = document.querySelector('span')
let txt = document.querySelector('h1')

axios.get(url)
.then(res => {
    login(res.data)
})
.catch(error => console.error(error))

function login(res) {
    form.onsubmit = (e) =>  {
        e.preventDefault()

        let fn = new FormData(form)

        let ob = {}
        fn.forEach((value, key) => {
            ob[key] = value
        })

        res.forEach(elem => {
            if (elem.email == ob.email && elem.password == ob.password) {
                localStorage.setItem("userId", elem.id)
                window.location.replace('/')
            } else if (elem.password !== ob.password) {
                inps.forEach(inp =>  {
                    inp.style.border = "1px solid red"
                })
                err.setAttribute("class", "acctive")
                txt.style.marginBottom = "0"
                err.innerText = `Почта или пароль введены неверно`
            } else {
                inps.forEach(inp =>  {
                    inp.style.border = "1px solid red"
                })
                err.setAttribute("class", "acctive")
                txt.style.marginBottom = "0"
                err.innerText = `Почта или пароль введены неверно`
            }
        })
    }
}

function generateRandomToken(length) {
    let num = "ABCDEFGHIJCLMNOPQYZabcdefghijklmnopqyz1234567890";
    let token = '';

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * num.length);

        token += num[random];
    }

    return token;
}

let randomToken = generateRandomToken(10);
console.log("Token: " + randomToken);


