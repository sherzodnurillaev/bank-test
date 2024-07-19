import axios from "axios";
import { header } from "./components/head.js";

header()

let url = "http://localhost:8080/users"

let ls = localStorage.getItem("userId")

axios.get(`${url}/${ls}`)
.then(res => {
    data(res.data)
})
.catch(error => console.error(error))

function data(res) {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    name.innerText = res.sureName + ' ' + res.name
    email.innerText = res.email
}
