import axios from "axios";

let url = "http://localhost:8080/"

export function getData(endpoins) {
    try {
        let res = axios.get(url + endpoins)
        return res
    } catch (error) {
        console.log(error);
    }
}

export function postData(endpoins, body) {
    try {
        let res = axios.post(url + endpoins, body)

        return res
    } catch (error) {
        console.log(error);
    }
}
