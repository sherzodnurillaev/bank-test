import { header } from "../../components/head";
import { headTxt } from "../../components/headTxt";
import { getData } from "/libs/http.js";
header()
headTxt()

let ls = localStorage.getItem("userId")

getData("users" + '/' + ls)
.then(res => {
    wallet(res.data)
})
.catch(error => console.log(error))

function wallet(res) {
    let email = document.querySelector(".email")
    let emailHeader = document.querySelector('.right span')
    emailHeader.innerText = res.email
    email.innerText = res.email
}

let img = document.querySelector('.right img')

img.onclick = () => {
    window.location.replace("/pages/login/")
}

