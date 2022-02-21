import {
     ADD_SEARCH,
ADD_SEARCH_LOADING,
ADD_SEARCH_SUCCESS,
GET_SEARCH_LOADING,
GET_SEARCH_SUCCESS
} from "./actionTypes"

export const addSearch=(payload)=>({
     type:ADD_SEARCH,
     payload,
})

export const addSearchLoading=(payload)=>({
    type:ADD_SEARCH_LOADING,

})

export const addSearchSuccess=(payload)=>({
    type:ADD_SEARCH_SUCCESS,
    payload,

})

export const getSearchLoading=(payload)=>({
    type:GET_SEARCH_LOADING,
   

})

export const getSearchSuccess=(payload)=>({
    type:GET_SEARCH_SUCCESS,
   payload

})

