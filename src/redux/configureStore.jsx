import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './StocksReducer';
import stockReducer from './StockReducer';
import indicesReducer from './IndicesReducer';

const reducer = combineReducers({
  stocksReducer, indicesReducer, stockReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
