import React, {useState, useEffect} from 'react';
import {ScrollView, View, LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import Style from './Style';

const ForgetPassword = () => {
  const onClick = useNavigation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToLogin = () => {
    onClick.navigate('Login');
  };

  const navToSuccessSendNewPassword = () => {
    onClick.navigate('SuccessSendNewPassword');
  };

  const [email, setEmail] = useState('');

  return (
    <ScrollView style={Style.screen}>
      <View>
        <AuthHeader
          headerTitle="استعادة كلمة المرور"
          onPress={() => {
            navToLogin();
          }}
        />

        <AuthInput
          inputTitle="البريد الالكترونى"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AuthButton
          btnTitle="إرسال"
          onPress={() => {
            navToSuccessSendNewPassword();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
