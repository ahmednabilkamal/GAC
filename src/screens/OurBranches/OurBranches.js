import React, {useEffect} from 'react';
import {View, Image, ScrollView, I18nManager, LogBox} from 'react-native';
import {useTranslation} from 'react-i18next';

/**
 * Animation
 */
import FadeInView from '../../Animation/FadeIn';

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
      <View style={Style.screen}>
        <FadeInView>
          <Image
            style={Style.branchesImg}
            source={require('../../../assets/branch.png')}
          />
        </FadeInView>
      </View>
    </ScrollView>
  );
};

export default OurBranches;
