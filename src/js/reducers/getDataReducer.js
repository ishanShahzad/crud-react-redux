import * as types from '../constants';


export default function (state = {isLoading:false,data:[],error:null},action){
	switch(action.type){
		case types.GET_DATA_ATTEMPT:
			return {...state,isLoading:true}
		case types.GET_DATA_SUCCESS:
			return {...state, isLoading:false,data:action.payload,error:null}
		case types.GET_DATA_FAIL:
			return {...state, isLoading:false,error:action.payload}
		case types.SUBMIT_DATA_SUCCESS:
			state.data.push(action.payload)
			return {...state }
		case types.DELETE_DATA_SUCCESS:
			const newData = state.data.filter(item=>item._id !== action.payload._id)
			return {...state,data:newData}		
		default:
			return state			
	}
}