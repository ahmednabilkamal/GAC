import React, {useEffect} from 'react';
import {ScrollView, View, StatusBar, LogBox} from 'react-native';

/**
 * Components
 */
import NewsItem from '../../../components/NewsItem/NewsItem';

/**
 * Style
 */
import Style from './Style';
import Colors from '../../../constants/Colors';

const News = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  return (
    <View style={Style.container}>
      <StatusBar backgroundColor={Colors.brownLight} />

      <ScrollView>
        <View style={Style.screen}>
          <NewsItem newsImg={require('../../../../assets/news1.png')} />
          <NewsItem newsImg={require('../../../../assets/news2.png')} />
          <NewsItem newsImg={require('../../../../assets/news3.png')} />
          <NewsItem newsImg={require('../../../../assets/news_bg.png')} />
          <NewsItem newsImg={require('../../../../assets/news1.png')} />
          <NewsItem newsImg={require('../../../../assets/news2.png')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default News;
