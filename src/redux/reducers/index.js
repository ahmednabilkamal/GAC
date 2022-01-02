import {combineReducers} from 'redux';

import NewsReducers from './NewsReducers/NewsReducers';

const rootReducer = combineReducers({
  news: NewsReducers,
});

export default rootReducer;
