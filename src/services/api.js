import axios from "axios"
import md5 from "md5"

const publicKey = 'a40f700e129dbf14d7862bb716f99cf7'
const privateKey = 'e65c73985dc299be0c9259e68279d1c5f24d0046'
const time = Number(new Date());
const hash = md5(time + privateKey +publicKey)

const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/',
    params:{
        ts:time,
        apikey:publicKey,
        hash,
    },
});

export default api;