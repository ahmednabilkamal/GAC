import React, {useState, useEffect} from 'react';
import {ScrollView, View, LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import Style from './Style';

const CreateNewPassword = () => {
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

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView style={Style.screen}>
      <View style={Style.container}>
        <AuthHeader
          headerTitle="إنشاء كلمة مرور جديدة"
          onPress={() => {
            navToLogin();
          }}
        />

        <AuthInput
          inputTitle="كلمة المرور"
          value={password}
          onChangeText={setPassword}
          passwordImgPath={require('../../../../assets/password.png')}
          secureTextEntry={true}
        />

        <AuthInput
          inputTitle="كلمة المرور"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          passwordImgPath={require('../../../../assets/password.png')}
          secureTextEntry={true}
        />

        <AuthButton
          btnTitle="انشاء"
          onPress={() => {
            navToSuccessSendNewPassword();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default CreateNewPassword;
