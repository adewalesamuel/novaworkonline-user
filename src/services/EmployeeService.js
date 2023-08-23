import { Api } from './Api';

const  ENPOINTS = {
    Employee: 'employees',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Employee, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Employee}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Employee, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Employee}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Employee}/${id}`, signal)
}

export const EmployeeService = {
    getAll,
    getById,
    create,
    update,
    destroy
}