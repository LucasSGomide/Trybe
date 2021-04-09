import { createStore, combineReducers } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { TEXT_INPUT } from '../actions'

const intialState = {
  name: '',
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case TEXT_INPUT:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;