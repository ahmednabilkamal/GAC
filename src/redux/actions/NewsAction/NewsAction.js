/**
 * news header types
 */

export const ALL_NEWS = 'ALL_NEWS';
export const RECENT_NEWS = 'RECENT_NEWS';
export const MOST_VIEWED_NEWS = 'MOST_VIEWED_NEWS';

export const showAllNewsAction = (
  showAllNews,
  showRecentNews,
  showMostViewed,
) => {
  return {
    type: ALL_NEWS,
    payload: {
      showAllNews,
      showRecentNews,
      showMostViewed,
    },
  };
};

export const showRecentNewsAction = (
  showAllNews,
  showRecentNews,
  showMostViewed,
) => {
  return {
    type: RECENT_NEWS,
    payload: {
      showAllNews,
      showRecentNews,
      showMostViewed,
    },
  };
};

export const showMostViewedNewsAction = (
  showAllNews,
  showRecentNews,
  showMostViewed,
) => {
  return {
    type: MOST_VIEWED_NEWS,
    payload: {
      showAllNews,
      showRecentNews,
      showMostViewed,
    },
  };
};
