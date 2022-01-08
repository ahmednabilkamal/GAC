import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

/**
 * Icons
 */
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style
 */
import Style from './Style';

const EntireHeader = ({children, style, ...props}) => {
  return (
    <ImageBackground
      {...props}
      style={Style.img}
      resizeMode="cover"
      source={require('../../../assets/img_new_header.png')}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={Style.headerImg}>
        {/* back button */}
        <TouchableOpacity style={Style.back}>
          <Text style={Style.backText}>العوده</Text>
          <BackIcon name="chevron-back" color="white" size={20} />
        </TouchableOpacity>

        {/* header title */}
        <View style={Style.headerTitleContainer}>
          <Text adjustsFontSizeToFit style={Style.headerTitle}>
            {props.headerTitle}
          </Text>
        </View>
      </View>
      <View style={Style.content}>{children}</View>
    </ImageBackground>
  );
};

export default EntireHeader;
