import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, I18nManager, LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

/**
 * Components
 */
import ImageHeader from '../../components/ImageHeader/ImageHeader';

/**
 * Icons
 */
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';
import ClockIcon from 'react-native-vector-icons/AntDesign';

/**
 * Style
 */
import Style from './Style';
import Colors from '../../constants/Colors';

const NewsDetails = () => {
  const onClick = useNavigation();
  const {i18n} = useTranslation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageHeader>
      {/* news content */}
      <View style={Style.content}>
        <View style={Style.newsDetailsHeader}>
          <View style={Style.bookmark}>
            <BookmarkIcon
              style={Style.bookmarkIcon}
              name="bookmark"
              size={20}
              color={Colors.red}
              onPress={() => {
                onClick.navigate('PDF');
              }}
            />
          </View>

          <View style={Style.time}>
            <Text style={Style.newsDetailsHeaderText}>2:30 am</Text>
            <ClockIcon
              style={Style.timeIcon}
              name="clockcircleo"
              size={20}
              color={Colors.brownLight}
            />
          </View>

          <View style={Style.views}>
            <Text style={Style.newsDetailsHeaderText}>50000</Text>
            <ClockIcon
              style={Style.eyeIcon}
              name="eye"
              size={22}
              color={Colors.brownLight}
            />
          </View>
        </View>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={Style.newsTitle}>
              اتفاقية التجارة الحرة العربية الكبرى (جافتا)
            </Text>

            <Text style={Style.newsContent}>
              مثال تجريبي على محتوى الخبر يستبدل بالنص عضوًا في جامعة الدول
              العربية عام 1981 اتفاقية
            </Text>

            <Text style={Style.newsContent}>
              التجارة الحرة العربية واتفقوا على شروطها عام مثال 1997 بهدف تيسير
              وتطوير التجارة بين الدول العربية واتفق أعضاء الاتفاقية على القضاء
            </Text>

            <Image
              style={Style.newsImg}
              source={require('../../../assets/news_details.png')}
            />
          </View>
        </ScrollView>
      </View>
    </ImageHeader>
  );
};

export default NewsDetails;
