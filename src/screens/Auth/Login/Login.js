import React, {useState, useEffect} from 'react';
import {View, Text, LogBox, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import Style from './Style';

const Login = () => {
  const onClick = useNavigation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToRegister = () => {
    onClick.navigate('Register');
  };

  const navToForgetPassword = () => {
    onClick.navigate('ForgetPassword');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Style.screen}>
      <View style={Style.container}>
        <AuthHeader headerTitle="دخول حسابى" />

        <AuthInput
          inputTitle="البريد الالكترونى"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AuthInput
          inputTitle="كلمة المرور"
          value={password}
          onChangeText={setPassword}
          passwordImgPath={require('../../../../assets/password.png')}
          secureTextEntry={true}
        />
        <AuthButton btnTitle="دخول" onPress={() => {}} />
      </View>

      <View style={Style.loginFooter}>
        <TouchableOpacity
          onPress={() => {
            navToRegister();
          }}>
          <Text style={Style.createNewAccount}>إنشاء حساب جديد</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navToForgetPassword();
          }}>
          <Text style={Style.RePassword}>استعادة كلمة المرور</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
