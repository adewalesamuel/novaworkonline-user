import { Api } from './Api';

const  ENPOINTS = {
    Login: 'login',
    Logout: 'logout',
    Register: 'register',
    PasswordForget: 'forgot-password',
    PasswordReset: 'reset-password'
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

const forgotPassword = (payload, signal) => {
    return Api.post(ENPOINTS.PasswordForget, payload, signal)
}

const resetPassword = (payload, signal) => {
    return Api.post(ENPOINTS.PasswordReset, payload, signal)
}

export const AuthService = {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
}