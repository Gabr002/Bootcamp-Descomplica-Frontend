
import * as pinService  from '../services/pinService'
import * as types from  './types'

export const openModalSavePinAction = () => ({
    type: types.openModalSavePinType
})

export const closeModalAction = () => ({
    type: types.closeModalsType
})

export const fechtFoldersInitAction = () => ({
    type: types.fetchFoldersInitType
})

export const fechtFoldersSucessAction = (folders) => ({
    type: types.fetchFoldersSucessType,
    payload: folders
})

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fechtFoldersInitAction());
    const folders = await pinService.getFolders(); 
    dispatch(fechtFoldersSucessAction(folders));
}