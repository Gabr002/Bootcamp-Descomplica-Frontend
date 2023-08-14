import * as types from  '../store/types'

export function Reducer(state, action){
    switch(action.types){
        case types.openModalSavePinType :
            return{ 
                ...state,
                mode: 'savePin'
            }
        case types.closeModalsType :
            return{
                ...state,
                mode: null
            }
        case types.fetchFoldersInitType:
            return {
                ...state,
            }
        case types.fetchFoldersSucessType:
            return{
                ...state,
                folders: action.payload
            }
        default:
            return state;
    }
}