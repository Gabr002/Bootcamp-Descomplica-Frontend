import * as types from  '../store/actions'

export function Reducer(state, action){
    switch(action.types){
        case types.openModalSavePinAction :
            return{ 
                ...state,
                mode: 'savePin'
            }
        case types.closeModalAction :
            return{
                ...state,
                mode: null
            }
        case types.fetchFolders:
            return{
                ...state,
                folders: 
            }
        default:
            return state;
    }
}