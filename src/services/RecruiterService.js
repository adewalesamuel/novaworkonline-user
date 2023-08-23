import { Api } from './Api';

const  ENPOINTS = {
    Recruiter: 'recruiters',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Recruiter, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Recruiter}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Recruiter, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Recruiter}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Recruiter}/${id}`, signal)
}

export const RecruiterService = {
    getAll,
    getById,
    create,
    update,
    destroy
}