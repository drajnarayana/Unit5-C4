import {
    ADD_SEARCH,
ADD_SEARCH_LOADING,
ADD_SEARCH_SUCCESS,
GET_SEARCH_LOADING,
GET_SEARCH_SUCCESS
} from "./actionTypes"

const init={
    search:{
        loading:false,
        error:false,
        data:[]
    }
}

export const Reducer=(store=init,{type,payload})=>{
   switch(type){
       case ADD_SEARCH:
           return{
               ...store,search:[...store.search,payload]
           }
       
           case ADD_SEARCH_LOADING:
            return{
               ...store,search:{
                   ...store.search,
                   loading:true
               }
            }
         
            case ADD_SEARCH_SUCCESS:
            return{
               ...store,search:{
                   ...store.search,
                   loading:false
               }
            }
              case GET_SEARCH_LOADING:
            return{
               ...store,search:{
                   ...store.search,
                   loading:false
               }
            }

            case GET_SEARCH_SUCCESS:
                return{
                   ...store,search:{
                       ...store.search,
                       loading:false,
                       data:payload
                   }
                }
                default:
                    return {
                        ...store
                    }
    
   }
}