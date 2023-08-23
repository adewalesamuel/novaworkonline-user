import { Api } from './Api';

const  ENPOINTS = {
    User: 'users',
};

const getAll = signal => {
    return Api.get(ENPOINTS.User, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.User}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.User, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.User}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.User}/${id}`, signal)
}

export const UserService = {
    getAll,
    getById,
    create,
    update,
    destroy
}