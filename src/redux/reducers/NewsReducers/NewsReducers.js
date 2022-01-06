import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showAllNews: true,
  showRecentNews: false,
  showMostViewed: false,
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    AllNewsAction: state => {
      state.showAllNews = true;
      state.showRecentNews = false;
      state.showMostViewed = false;
    },

    RecentNewsAction: state => {
      state.showAllNews = false;
      state.showRecentNews = true;
      state.showMostViewed = false;
    },

    MostViewedAction: state => {
      state.showAllNews = false;
      state.showRecentNews = false;
      state.showMostViewed = true;
    },
  },
});

export default NewsSlice.reducer;

// Action
const {AllNewsAction, RecentNewsAction, MostViewedAction} = NewsSlice.actions;

export const AllNewsAction2 = state => async dispatch => {
  try {
    dispatch(AllNewsAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

export const RecentNewsAction2 = state => async dispatch => {
  try {
    dispatch(RecentNewsAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

export const MostViewedAction2 = state => async dispatch => {
  try {
    dispatch(MostViewedAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

// /**
//  * news header types
//  */

// import {
//   ALL_NEWS,
//   RECENT_NEWS,
//   MOST_VIEWED_NEWS,
// } from '../../actions/NewsAction/NewsAction';

// const initialState = {
//   showAllNews: true,
//   showRecentNews: false,
//   showMostViewed: false,
// };

// export const NewsReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case ALL_NEWS:
//       return {
//         ...state,
//         showAllNews: true,
//         showRecentNews: false,
//         showMostViewed: false,
//       };
//     case RECENT_NEWS:
//       return {
//         ...state,
//         showAllNews: false,
//         showRecentNews: true,
//         showMostViewed: false,
//       };
//     case MOST_VIEWED_NEWS:
//       return {
//         ...state,
//         showAllNews: false,
//         showRecentNews: false,
//         showMostViewed: true,
//       };
//     default:
//       return state;
//   }
// };

// export default NewsReducers;
