import * as types from '../constants';
import axios from 'axios';
import {push} from 'react-router-redux';

export function getData(){
	return dispatch=>{
		dispatch({type:types.GET_DATA_ATTEMPT})
		try{
			axios.get('/students')
			.then(res=>{
				dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
			})
		}catch(e){
			dispatch({type:GET_DATA_FAIL,payload:e})
		}
	}
}

export function submitData(data){
	return dispatch=>{
		dispatch({type:types.SUBMIT_DATA_ATTEMPT})
		try{
			axios.post('/students',data)
			.then(res=>{
				dispatch({type:types.SUBMIT_DATA_SUCCESS,payload:res.data})
				// dispatch(push('/contact'))
				// dispatch(getData())
			})
		} catch(e){
			dispatch({type:types.SUBMIT_DATA_FAIL,payload:e})
		}
	}
}

export function deleteData(id){
	return dispatch=>{
		dispatch({type:types.DELETE_DATA_ATTEMPT})
		try{
			axios.post(`/student/delete/${id}`)
			.then(res=>{
				dispatch({type:types.DELETE_DATA_SUCCESS,payload:res.data})
			})
		} catch(e){
			dispatch({type:types.DELETE_DATA_FAIL,payload:e})
		}
	}
}

