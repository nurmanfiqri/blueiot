const redux = require('redux');
const createStore = redux.createStore; 

const initialState = {
    value = 1
}


const rootReducer = (state = initialState, action) => {
    return state;
}

const store = createStore(rootReducer);
console.log(store.getState());