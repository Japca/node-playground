import { SET_TECHNOLOGY } from '../actions'

export default function reducer (state, action) {
    console.log(action);
    switch (action.type) {
        case SET_TECHNOLOGY:
            return {
                ...state,
                text: action.tech
            }; //return new state
        default:
            return state;
    }
}