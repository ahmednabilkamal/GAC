/**
 * news header types
 */

import {
  ALL_NEWS,
  RECENT_NEWS,
  MOST_VIEWED_NEWS,
} from '../../actions/NewsAction/NewsAction';

const initialState = {
  showAllNews: true,
  showRecentNews: false,
  showMostViewed: false,
};

export const NewsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ALL_NEWS:
      return {
        ...state,
        showAllNews: true,
        showRecentNews: false,
        showMostViewed: false,
      };
    case RECENT_NEWS:
      return {
        ...state,
        showAllNews: false,
        showRecentNews: true,
        showMostViewed: false,
      };
    case MOST_VIEWED_NEWS:
      return {
        ...state,
        showAllNews: false,
        showRecentNews: false,
        showMostViewed: true,
      };
    default:
      return state;
  }
};

export default NewsReducers;
