import { Api } from './Api';

const  ENPOINTS = {
    Login: 'login',
    Logout: 'logout',
    Register: 'register'
};


const register = (payload, signal) => {
    return Api.post(ENPOINTS.Register, payload, signal)
}

const login = (payload, signal) => {
    return Api.post(ENPOINTS.Login, payload, signal)
}

const logout = (payload, signal) => {
    return Api.post(ENPOINTS.Logout, payload, signal)
}


export const AuthService = {
    register,
    login,
    logout
}