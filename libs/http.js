import axios from "axios";

let url = "http://localhost:8080/"

export async function getData(endpoins) {
    try {
        let res = await axios.get(url + endpoins)
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function postData(endpoins, body) {
    try {
        let res = await axios.post(url + endpoins, body)

        return res
    } catch (error) {
        console.log(error);
    }
}
