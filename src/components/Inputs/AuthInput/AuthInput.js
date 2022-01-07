import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

/**
 * Style
 */
import Style from './Style';

const AuthInput = props => {
  /**
   * [[[ Props Explain ]]]
   * * onChangeText --> when text change
   * * placeholder --> placeholder
   * * keyboardType --> keyboardType
   * * secureTextEntry --> secureTextEntry for the password
   * * autoCapitalize --> autoCapitalize
   * * placeholderTextColor --> placeholderTextColor
   * * onSubmitEditing --> onSubmitEditing
   * * onEndEditing --> when the user end typing
   * * value --> input value
   * * passwordImgPath --> path of password eye icon
   * * inputTitle --> name of text input
   */

  return (
    <View style={Style.authInput}>
      <Text style={Style.inputTitle}>{props.inputTitle}</Text>
      <TextInput
        style={Style.input}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        autoCapitalize={props.autoCapitalize}
        onSubmitEditing={props.onSubmitEditing}
        onEndEditing={props.onEndEditing}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
        numberOfLines={1}
      />
      <Image source={props.passwordImgPath} style={Style.passwordIcon} />
    </View>
  );
};

export default AuthInput;
