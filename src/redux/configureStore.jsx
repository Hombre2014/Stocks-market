import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './StocksReducers';
import indicesReducer from './IndicesReducer';

const reducer = combineReducers({
  stocksReducer, indicesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
