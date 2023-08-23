import { Api } from './Api';

const  ENPOINTS = {
    Project: 'projects',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Project, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Project}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Project, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Project}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Project}/${id}`, signal)
}

export const ProjectService = {
    getAll,
    getById,
    create,
    update,
    destroy
}