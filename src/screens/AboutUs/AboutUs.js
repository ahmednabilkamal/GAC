import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, I18nManager, LogBox} from 'react-native';
import {useTranslation} from 'react-i18next';

/**
 * Animation
 */
import FadeInView from '../../Animation/FadeIn';

/**
 * Style
 */
import Style from './Style';

const AboutUs = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={Style.screen}>
        <FadeInView>
          <Image
            style={Style.aboutUsImg}
            source={require('../../../assets/about_us.png')}
          />

          <Text style={Style.newsContent}>
            الإدارة العامة للجمارك بأبوظبي هي جهة حكومية إلى تنفيذ السياسة
            الجمركية المقررة من السلطة
          </Text>

          <Text style={Style.newsContent}>
            المختصة والإشراف على دخول البضائع الي البلاد إوخروجها منها وتحصيل
            الرسوم الجمركية المقررة على البضائع وفقا للقوانين
          </Text>

          <Text style={Style.newsContent}>
            الإدارة العامة للجمارك بأبوظبي هي جهة إلى تنفيذ السياسة الجمركية
            المقررة من السلطة المختصة والإشراف على دخول البضائع الي البلاد
            إوخروجها منها وتحصيل الرسوم الجمركية البضائع وفقا للقوانين والأنظمة
            المعمول بها بالدولة
          </Text>
        </FadeInView>
      </View>
    </ScrollView>
  );
};

export default AboutUs;
