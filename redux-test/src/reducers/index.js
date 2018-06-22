import { SET_TECHNOLOGY } from '../actions'

export default function reducer (state, action) {
    console.log(action);
    switch (action.type) {
        case SET_TECHNOLOGY:
            return {
                tech : action.text
            }
        default:
            return state;
    }
}