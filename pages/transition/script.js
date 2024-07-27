import { header } from "../../components/head";
import { headTxt } from "../../components/headTxt";
import { reloadTrans } from "../../libs/transicion";
import { getData } from "../../libs/http";

header()
headTxt()

let ls = localStorage.getItem("userId")
getData("users" + '/' + ls)
.then(res => {
    wallet(res.data)
})
.catch(error => console.log(error))

function wallet(res) {
    let emailHeader = document.querySelector('.right span')
    let email = document.querySelector('.email')
    let well = document.querySelector('.headTxt h1')
    emailHeader.innerText = res.email
    well.innerText = 'Мои транзакции'
    email.innerText = res.email
}

getData("transactions" + "/" + ls)
.then(res => reloadTrans(res.data))
.catch(error => console.log(error))

let img = document.querySelector('.right img')
img.onclick = () => {
    window.location.replace("/pages/login/")
}
