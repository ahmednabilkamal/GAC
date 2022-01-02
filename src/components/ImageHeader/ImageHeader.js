import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

/**
 * Icons
 */
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style
 */
import Style from './Style';

const ImageHeader = ({children, style, ...props}) => {
  const onClick = useNavigation();
  const {t} = useTranslation();

  return (
    <ImageBackground
      {...props}
      style={Style.img}
      resizeMode="cover"
      source={require('../../../assets/img_new_header.png')}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={Style.headerImg}>
        {/* back button */}
        <TouchableOpacity
          style={Style.back}
          onPress={() => {
            onClick.navigate('NewsContainer');
          }}>
          <BackIcon name="chevron-back" color="white" size={20} />
          <Text style={Style.backText}>{t('العوده')}</Text>
        </TouchableOpacity>

        {/* header title */}
        <View style={Style.headerTitleContainer}>
          <Text adjustsFontSizeToFit style={Style.headerTitle}>
            تدريب مفتشي جمارك ابوظبي عبر تقنية الواقع الافتراضي
          </Text>
        </View>
      </View>

      {children}
      {/* <View>{children}</View> */}
    </ImageBackground>
  );
};

export default ImageHeader;
