import {combineReducers} from 'redux';

import NewsReducers from './NewsReducers/NewsReducers';
import AboutUsReducers from './AboutUsReducers/AboutUsReducers';

const rootReducer = combineReducers({
  news: NewsReducers,
  aboutUs: AboutUsReducers,
});

export default rootReducer;
