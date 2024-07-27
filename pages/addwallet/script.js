import { postData } from "../../libs/http"

let form = document.forms.addWallet 
let inps = document.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault()
    let fn = new FormData(form)

    let userId = localStorage.getItem("userId")

    let wallet = {}

    fn.forEach((value, key) => {
        inps.forEach(inp => {
            if (value.length > 0) {
                wallet[key] = value
                inp.style.border = "1px solid #000000"
            } else {
                inp.style.border = "1px solid red"
            }
        })
    })

    postData("wallets", { ...wallet, userId})
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

    window.location.replace('/')
}
