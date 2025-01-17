import { getData } from "../../libs/http";

let form = document.forms.login
let inps = document.querySelectorAll('input')
let err = document.querySelector('span')
let txt = document.querySelector('h1')

getData("users")
.then(res => login(res.data))
.catch(error => console.log(error))

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
                localStorage.setItem("token", elem.token)
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


