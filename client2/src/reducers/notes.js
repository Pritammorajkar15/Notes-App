const notesInitialState=[]

const notesReducer=(state=notesInitialState,action)=>{
    switch(action.type)
    {
        case "LIST_NOTES":{
            return [...action.payload]
        }
        case "REMOVE_NOTES":{
            return state.filter(n=>n._id!=action.payload)
        }
        case "ADD_NOTE":{
            return [...state,action.payload]
        }
        case "EDIT_NOTE":{
            return state.map(n=>{
                if(n._id==action.payload.id){
                    return {...action.payload}
                }
                else{
                    return {...n}
                }
            })
        }
        default:{
            return [...state]
        }
    }

}
export {notesReducer}