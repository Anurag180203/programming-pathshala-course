const initialUserState = [
    // {name:'a',college:'A'},
    // {name:'b',college:'B'},
    // {name:'c',college:'C'}
];

const userStateReducer = (state, action) => {
    switch(action.type) {
        case "create":
            return [...action.data];
        // case "insert":
        //     return [...state,{name: action.name,college: action.college}];
        case "edit":
            state.filter(user => user.name === action.name)[0][action.property] = action.newValue;
            return [...state]
        // case "delete":
        //     return state.filter((user) => user.name !== action.name);
        default:
            return state;
    }
}

//using this we decouple the state from the component as well as the actions
// important to segregate views from logic and state

export {initialUserState, userStateReducer};