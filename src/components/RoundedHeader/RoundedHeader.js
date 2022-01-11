import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

/**
 * Icons
 */
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style & Colors
 */
import Style from './Style';
import Colors from '../../constants/Colors';

const RoundedHeader = props => {
  return (
    <View style={Style.header}>
      <TouchableOpacity style={Style.back}>
        <Text style={Style.backText}>العوده</Text>
        <BackIcon name="chevron-back" color={Colors.black} size={20} />
      </TouchableOpacity>

      <Text style={Style.headerTitle}>{props.headerTitle}</Text>

      <TouchableOpacity style={Style.language}>
        <Text style={Style.langTxt}>EN</Text>
        <Image source={require('../../../assets/en.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default RoundedHeader;
