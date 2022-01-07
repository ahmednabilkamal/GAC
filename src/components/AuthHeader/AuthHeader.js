import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

/**
 * Icons
 */
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style
 */
import Style from './Style';

const AuthHeader = props => {
  return (
    <View style={Style.header}>
      <TouchableOpacity style={Style.back} onPress={props.onPress}>
        <Text style={Style.backText}>العودة</Text>
        <BackIcon name="chevron-back" color="black" size={20} />
      </TouchableOpacity>

      <Text style={Style.headerTitle}>{props.headerTitle}</Text>
    </View>
  );
};

export default AuthHeader;
