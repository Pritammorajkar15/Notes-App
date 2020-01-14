const categoryInitialstate=[]

const categoriesReducer=(state=categoryInitialstate,action)=>{
        switch(action.type){
            case "SET_CAT":{
                return [...action.payload]
            }
            case "CAT_REMOVE":{
                return state.filter(cat=>cat._id!=action.payload)
            }
            case "ADD_CATEGORY":{
                return [...state,action.payload]
            }
            case "EDIT_CAT":{
                return state.map(c=>{
                    if(c._id==action.payload.id){
                        return {...action.payload}
                    }
                    else{
                        return {...c}
                    }
                })
            }
            default:{
                return [...state]
            }
        }
}
export default categoriesReducer