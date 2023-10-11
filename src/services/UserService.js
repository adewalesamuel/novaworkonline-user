import { Api } from './Api';

const  ENPOINTS = {
    User: 'profile',
};

const getAnaltics = signal => {
    return Api.get('analytics', signal)
}

const getProfile = signal => {
    return Api.get(ENPOINTS.User, signal)
}

const getAll = signal => {
    return Api.get(ENPOINTS.User, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.User}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.User, payload, signal)
}

const update = (payload, signal) => {
    return Api.put(ENPOINTS.User, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.User}/${id}`, signal)
}

export const UserService = {
    getAnaltics,
    getProfile,
    getAll,
    getById,
    create,
    update,
    destroy
}