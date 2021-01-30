// import {createStore} from 'react-redux';
import rootReducer from '../rootReducer/rootReducer';
import{createStore} from 'redux';

const store = createStore(rootReducer);

export default store;