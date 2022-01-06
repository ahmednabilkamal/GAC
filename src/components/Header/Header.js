import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as Animatable from 'react-native-animatable';

/**
 * Icons
 */
import SearchIcon from 'react-native-vector-icons/Fontisto';
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style & Colors
 */
import Style from './Style';
import Colors from '../../constants/Colors';

const Header = props => {
  const types = [
    'bounceIn',
    'bounceInDown',
    'bounceInUp',
    'bounceInLeft',
    'bounceInRight',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'lightSpeedIn',
    'slideInDown',
    'slideInUp',
    'slideInLeft',
    'slideInRight',
    'zoomIn',
    'zoomInDown',
    'zoomInUp',
    'zoomInLeft',
    'zoomInRight',
  ];

  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'ar' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={Style.header}>
      <TouchableOpacity style={Style.back}>
        <Text style={Style.backText}>{t('العوده')}</Text>
        <BackIcon name="chevron-back" color="black" size={20} />
      </TouchableOpacity>

      <Text style={Style.headerTitle}>{props.headerTitle}</Text>

      <TouchableOpacity style={Style.search}>
        <SearchIcon name="search" size={20} color={Colors.blackMoreHeavy} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
