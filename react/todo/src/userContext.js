// context for user -- global state
import { createContext, useReducer } from "react";
import { initialUserState, userStateReducer } from "./userStateReducer";

const UserStateContext = createContext(null)

const UserStateReducerContext = createContext(null)

const UserProvider = ({children}) => {
    const [users, dispatch] = useReducer(userStateReducer, initialUserState);

    return (
        <UserStateContext.Provider value={users}>
            <UserStateReducerContext.Provider value={dispatch}>
                {children}
            </UserStateReducerContext.Provider>
        </UserStateContext.Provider>
    )
}

export {
    UserProvider,
    UserStateContext,
    UserStateReducerContext
}