import axios from 'axios';
const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const postSignUpInfo = (object) => {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, object)
    return promise
}

export {
    postSignUpInfo
}