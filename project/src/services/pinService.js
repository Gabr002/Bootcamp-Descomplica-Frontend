/**
 * getFolders()
 * saveFolder()
 * savePinFloder()
 */

const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)} - ${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
};

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async (folderName) => {
    /***
     * * Pegar lista/array de pastas -> getFolders
     * * Adicionar a pasta dentro desse array
     * * Salvar novamente no localST
     */
    const folders = await getFolders();

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    };

    folders.push(newFolder);

    localStorage.setItem('folders', JSON.stringify(folders));

    return newFolder; 
}

export const savePinFolder = async (folderId, pinId) => {
    /** 
     * Listar coleção/array de pastas storage
     * Encontrar a pasta que queremos adicionar pin
     * Adicionar o pinId na pasta
     * Salvar pastas no storage novamente
    */
   const folders = await getFolders();

   const folderIndex = folders.findIndex(function(folder){
        return folder.id === folderId;
   });
   
   if(folderIndex !== -1){
    folders[folderIndex].pins.push(pinId);
   }

   await saveFolders(folders);
 
   return { ...folders[folderIndex] };
}