import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
export const initStore = () => {
    return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk,logger)))
};

