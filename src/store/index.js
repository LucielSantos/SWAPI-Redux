import { createStore } from 'redux';
import { loadList } from '../services/api';

const INNITIAL_STATE = {}

function reducer(){
    return INNITIAL_STATE;
}

const store = createStore(reducer);

export default store;