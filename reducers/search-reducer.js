import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

//import { LOAD_SERIAL_SUCCESS } from "../actions/search-action"

const exampleInitialState = {
    serials:[]
};

export const load_reducer = (state = exampleInitialState, action) => {
   switch (action.type){
        case "LOAD_SERIAL_SUCCESS":
            return {
                ...state,
                serials: action.serials
            };
        default:
            return state;
    }
};


const logger = createLogger();
export const initStore = (initialState = exampleInitialState) => {
    return createStore(load_reducer, initialState, composeWithDevTools(applyMiddleware(thunk,logger)))
};

