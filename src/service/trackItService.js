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

const finishTodaysHabit = (config, habit, id) => {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, habit, config)
    return promise
}

const undoTodaysHabit = (config, habit, id) => {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, habit, config)
    return promise 
}

const createHabit = (object, config) =>{
    const promise = axios.post(`${BASE_URL}/habits`, object, config)
    return promise
}

const deleteHabit = (id, config) => {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config)
    return promise
}


export {
    postSignUpInfo,
    postLoginInfo,
    getUserHabits,
    getTodaysHabits,
    finishTodaysHabit,
    undoTodaysHabit,
    createHabit,
    deleteHabit
}