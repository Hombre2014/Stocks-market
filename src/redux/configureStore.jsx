import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './StocksReducer';
import stockReducer from './StockReducer';
import indicesReducer from './IndicesReducer';
import infoReducer from './InfoReducer';

const reducer = combineReducers({
  stocksReducer, indicesReducer, stockReducer, infoReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
