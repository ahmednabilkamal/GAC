import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

/**
 * Style
 */
import Style from './Style';

const AuthButton = props => {
  return (
    <TouchableOpacity style={Style.authBtn} onPress={props.onPress}>
      <Text style={Style.title}>{props.btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
