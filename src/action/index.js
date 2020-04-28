import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from './constants';

import jsonApi from '../api/jsonApi';
import { formValues } from 'redux-form';

export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const SignOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async dispatch => {
    const response = await jsonApi.post('/streams', formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data })
};

export const fetchStreams = () => async dispatch => {
    const response = await jsonApi.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async dispatch => {
    const response = await jsonApi.get(`/stream/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await jsonApi.put(`/stream/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data })
}

export const deleteStream = (id) => async dispatch => {
    await jsonApi.delete(`/stream/${id}`)
    dispatch({ type: DELETE_STREAM, payload: id });
}