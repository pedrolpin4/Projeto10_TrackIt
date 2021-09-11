import axios from 'axios';
const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const postSignUpInfo = (object) => {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, object)
    return promise
}

const postLoginInfo = (object) => {
    const promise = axios.post(`${BASE_URL}/auth/login`, object)
    return promise
}

const getUserHabits = (config) => {
    const promise = axios.get(`${BASE_URL}/habits`, config)
    return promise
}

const getTodaysHabits = (config) => {
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise
}

const finishTodaysHabit = (config, id) => {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, config)
    return promise
}

const undoTodaysHabit = (config, id) => {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, config)
    return promise 
}

const createHabit = (object, config) =>{
    const promise = axios.post(`${BASE_URL}/habits`, object, config)
    return promise
}


export {
    postSignUpInfo,
    postLoginInfo,
    getUserHabits,
    getTodaysHabits,
    finishTodaysHabit,
    undoTodaysHabit,
    createHabit
}