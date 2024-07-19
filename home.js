import { header } from "./components/head.js";
import { getData } from "./libs/http.js";
header()

let ls = localStorage.getItem("userId")

getData("users" + '/' + ls)
.then(res => {
    data(res.data)
})
.catch(error => console.log(error))

function data(res) {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    name.innerText = res.sureName + ' ' + res.name
    email.innerText = res.email
}
