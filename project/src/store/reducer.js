export function Reducer(state, action){
    console.log('Clicou34');
    switch(action.type){
        case 'open modal save pin':
            return{ // this is new Commit.
                ...state,
                mode: 'savePin'
            }
        default:
            return state;
    }
}