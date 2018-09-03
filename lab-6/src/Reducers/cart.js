import * as types from '../types';

const add = (state ={}, action)=>{
    switch(action.types){
        case types.PRODUCT_ADDED:{
            const {name} = action.payload;
            const quantity = state[name];

            if(typeof quantity !== 'undefined'){
                return{
                    ...state,
                    [name]: quantity +1;
                };
            }

            return{
                ...state,
                [name]: 1,
            };
        }

        default: return state;
    }
}