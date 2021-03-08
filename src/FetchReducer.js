
export const fetchReducer = (state = {data:{}, loading:true},action) => {

    switch(action.type){
        case "FETCH":
           { 
               return {
                ...state,
                data :  action.payload,
                loading : action.loading
            }
           }; 

        default:
            {
                return state
            } 
        }
    }