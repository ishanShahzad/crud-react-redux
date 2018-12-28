import getDataReducer from './getDataReducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
	students:getDataReducer
})

export default rootReducers;