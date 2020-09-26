import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import businessArticleReducer from '../reducers/BusinessArticleReducer';


const configureStore = () => {
    const store = createStore(combineReducers({
        businessArticles: businessArticleReducer
    }), applyMiddleware(thunk))

    return store;
}

export default configureStore;