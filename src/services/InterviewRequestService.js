import { Api } from './Api';

const  ENPOINTS = {
    InterviewRequest: 'interviewrequests',
};

const getAll = signal => {
    return Api.get(ENPOINTS.InterviewRequest, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.InterviewRequest}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.InterviewRequest, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.InterviewRequest}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.InterviewRequest}/${id}`, signal)
}

export const InterviewRequestService = {
    getAll,
    getById,
    create,
    update,
    destroy
}