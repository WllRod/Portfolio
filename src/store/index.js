import { createStore } from 'redux'

const INITIAL_STATE = {
    data: null
}

function Modal( state = INITIAL_STATE, action ){
    switch( action.type ){
        case 'SHOW_MODAL':
            return { ...state, data: action.Component }
        default:
            return state
    }
}

const store = createStore(Modal)

export default store