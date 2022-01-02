import React from 'react';
import {View} from 'react-native';

/**
 * Redux
 */
import {useSelector} from 'react-redux';

/**
 * Components
 */
import NewsTabs from '../NewsTabs/NewsTabs';

/**
 * Screens
 */
import AllNews from '../AllNews/AllNews';

/**
 * Style
 */
import Style from './Style';

const NewsContainer = () => {
  const news = useSelector(state => state.news);

  return (
    <View style={Style.newsContainer}>
      <NewsTabs />

      {news.showAllNews === true ? <AllNews /> : null}
      {news.showRecentNews === true ? <AllNews /> : null}
      {news.showMostViewed === true ? <AllNews /> : null}
    </View>
  );
};

export default NewsContainer;
