import { createStore } from "redux";

const userData = {
    auth: {
        userName: "hk",
        password: "12"
    },

    userDetails: {
        name: "hariom kourav",
        age: 21,
        contact: 9644597974,
    },
    userTasks: []
}

function rootReducer(state = userData, action) {
    switch (action.type) {
        case "ADD_TASK":
            state.userTasks.push(action.data)
            return state;
        default:
            return state;
    }
}

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;