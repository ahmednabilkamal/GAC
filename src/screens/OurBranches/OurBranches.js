import React, {useEffect} from 'react';
import {Image, ScrollView, I18nManager, LogBox} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as Animatable from 'react-native-animatable';

/**
 * Style
 */
import Style from './Style';

const OurBranches = () => {
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
      <Animatable.View animation={'fadeInUpBig'} style={Style.screen}>
        <Image
          resizeMode="contain"
          style={Style.branchesImg}
          source={require('../../../assets/branch.png')}
        />
      </Animatable.View>
    </ScrollView>
  );
};

export default OurBranches;
