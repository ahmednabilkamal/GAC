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

const ManagerSpeech = () => {
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
            style={Style.managerSpeechImg}
            source={require('../../../assets/manager.png')}
          />

          <Text style={Style.newsContent}>
            تلعب الإدارة العامة للجمارك دوراً رائداً وحيوياً في تحقيق نهضة
            أبوظبي من خلال الدعم المتواصل الذيتقدمه لاقتصاد وأمن دولة الإمارات
            العربية المتحدة
          </Text>

          <Text style={Style.newsContent}>
            وأثمر التزام الإدارة العامة للجمارك بالتوجيهاتالرشيدة لصاحب السمو
            الشيخخليفة بن زايد آل نهيان، رئيس الدولة حفظه اللهوصاحب السمو الشيخ
            محمد بن زايد آل نهيانولي عهد أبوظبي، نائب القائد الأعلى
          </Text>
        </FadeInView>
      </View>
    </ScrollView>
  );
};

export default ManagerSpeech;
