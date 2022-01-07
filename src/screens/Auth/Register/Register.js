import React, {useState, useEffect} from 'react';
import {View, Text, LogBox, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';

import Style from './Style';

const Register = () => {
  const onClick = useNavigation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToLogin = () => {
    onClick.navigate('Login');
  };

  const navToCreatePassword = () => {
    onClick.navigate('CreateNewPassword');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Style.screen}>
      <View style={Style.container}>
        <AuthHeader
          headerTitle="إنشاء حساب جديد"
          onPress={() => {
            navToLogin();
          }}
        />

        <AuthInput
          inputTitle="الإسم"
          value={name}
          onChangeText={setName}
          keyboardType="default"
        />

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
            navToLogin();
          }}>
          <Text style={Style.createNewAccount}>دخول حسابي</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navToCreatePassword();
          }}>
          <Text style={Style.RePassword}>استعادة كلمة المرور</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
