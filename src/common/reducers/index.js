import { combineReducers } from 'redux-immutable';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
