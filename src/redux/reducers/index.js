import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import NewsReducers from './NewsReducers/NewsReducers';
import AboutUsReducers from './AboutUsReducers/AboutUsReducers';

const rootReducer = combineReducers({
  news: NewsReducers,
  aboutUs: AboutUsReducers,
});

// const store = configureStore({
//   reducer: {
//     news: NewsReducers,
//     aboutUs: AboutUsReducers,
//   },
// });

export default rootReducer;
