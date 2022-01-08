import React, {useEffect} from 'react';
import {ScrollView, View, StatusBar, LogBox} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * Components
 */
import NewsItem from '../../../components/NewsItem/NewsItem';

/**
 * Style & Colors
 */
import Style from './Style';
import Colors from '../../../constants/Colors';

const News = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  return (
    <Animatable.View animation={'fadeInUpBig'} style={Style.container}>
      <StatusBar backgroundColor={Colors.brownLight} />

      <ScrollView>
        <View>
          <NewsItem newsImg={require('../../../../assets/news1.png')} />
          <NewsItem newsImg={require('../../../../assets/news2.png')} />
          <NewsItem newsImg={require('../../../../assets/news3.png')} />
          <NewsItem newsImg={require('../../../../assets/news_bg.png')} />
          <NewsItem newsImg={require('../../../../assets/news1.png')} />
          <NewsItem newsImg={require('../../../../assets/news2.png')} />
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default News;
