import { getData, postData } from "../../libs/http"

let form = document.forms.transition

let inps = document.querySelectorAll('input')

let sel = document.querySelector('.transitions')

getData("wallets")
.then(res => getOption(res.data))
.catch(error => console.log(error))

function getOption(res) {
    res.forEach(res => {

        let options = document.createElement('option')
        options.value = res.name
        options.innerText = res.name

        sel.append(options)
    })
}

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let trans = {}

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    let date = `${year}-${month}-${day}`;

    let userId = localStorage.getItem('userId')

    inpsValid()

    if (inpsValid() == false) {
        return
    } else {
        fn.forEach((value, key) => {
            console.log(value, key);
            trans[key] = value
        })
        postData('transactions', {...trans, date, userId})
        .then(res => console.log(res))
        .catch(error => console.log(error))
        window.location.replace('/')
    }

    // console.log({...trans, date, userId});
}

function inpsValid() {
    let valid = true
    inps.forEach(inp => {
        if (inp.value) {
            inp.style.border = "1px solid black"
        } else {
            valid = false
            inp.style.border = "1px solid red"
        }
    })
    return valid
}
