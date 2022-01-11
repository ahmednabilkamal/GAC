import {combineReducers} from 'redux';

import NewsReducers from './NewsReducers/NewsReducers';
import AboutUsReducers from './AboutUsReducers/AboutUsReducers';
import GalleryReducers from './GalleryReducers/GalleryReducers';

const rootReducer = combineReducers({
  news: NewsReducers,
  aboutUs: AboutUsReducers,
  gallery: GalleryReducers,
});

export default rootReducer;
