import { createStore, combineReducers } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { TEXT_INPUT } from '../actions'

const intialState = {
  forms: {
    name: '',
  },
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case TEXT_INPUT:
      return { ...state, forms: { ...state.forms, name: action.name } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer);

export default store;