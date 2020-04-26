import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: FormReducer
});