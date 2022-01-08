import React from 'react';
import * as Animatable from 'react-native-animatable';

/**
 * Redux
 */
import {useSelector} from 'react-redux';

/**
 * Component
 */
import NewsTabs from '../../Tabs/NewsTabs/NewsTabs';

/**
 * Screens
 */
import AllNews from '../../News/AllNews/AllNews';

/**
 * Style
 */
import Style from './Style';

const NewsContainer = () => {
  const news = useSelector(state => state.news);

  return (
    <Animatable.View animation={'fadeInUpBig'} style={Style.newsContainer}>
      <NewsTabs />

      {news.showAllNews === true ? <AllNews /> : null}
      {news.showRecentNews === true ? <AllNews /> : null}
      {news.showMostViewed === true ? <AllNews /> : null}
    </Animatable.View>
  );
};

export default NewsContainer;
