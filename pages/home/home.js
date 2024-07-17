import { header } from "../../components/head.js";

header()

let img = document.querySelector('img') 

img.onclick = () => {
    window.location.href = "../pages/registration/"
}
