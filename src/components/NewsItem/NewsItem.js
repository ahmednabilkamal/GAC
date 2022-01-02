import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

/**
 * Style
 */
import Style from './Style';

const NewsItem = props => {
  const onClick = useNavigation();

  const {t, i18n} = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={Style.newsItem}
        onPress={() => {
          onClick.navigate('NewsDetails');
        }}>
        <Image style={Style.newsImg} source={props.newsImg} />
        <View style={Style.newsContent}>
          <Text style={Style.newsTitle} numberOfLines={2}>
            {t('محتوى_الخبر')}
          </Text>
          <Text style={Style.newsDate}>{t('تاريخ')}</Text>
        </View>
      </TouchableOpacity>

      <View style={Style.line} />
    </View>
  );
};

export default NewsItem;
