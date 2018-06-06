export default function reducer (state, action) {
    switch (action.type) {
        case "is_open":
            return;  //return new state
        case "is_clicked":
            return; //return new state
        default:
            return state;
    }
}