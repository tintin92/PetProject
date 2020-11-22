import React, { createContext, useReducer } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

function reducer(state, action) {
    switch (action.type) {
        case "GET_USER":
            return action.payload;
        default:
            return state;
    }
}

function UserProvider({ value = {}, ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
    localStorage.setItem("user", state.username)

    return <Provider value={[state.id, dispatch]} {...props} />;
}

export { UserProvider, UserContext };
