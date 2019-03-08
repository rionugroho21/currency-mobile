import _datas from '../data/datas';
import {combineReducers} from 'redux';

function datas(state = _datas, action) {
    switch (action.type) {
        case 'REMOVE_RATES': return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_RATES': return [...state, action.post];
        case 'LOAD_RATES': return action.datas;
        case 'SETTING_DATA': return action.data;
        default: return state;
    }
}

function rates(state = _datas, action){
    switch (action.type) {
        case 'LOAD_COUNTRY': return action.data;
        default: return state;
    }
}

const rootReducer = combineReducers({datas, rates});

export default rootReducer;