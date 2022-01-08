import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  LogBox,
  TouchableOpacity,
  StatusBar,
  Animated,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

/**
 * component
 */
import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import AuthNewHeader from '../../../components/HomeHeader/AuthNewHeader';

import Style from './Style';

const Login = () => {
  const onClick = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToRegister = () => {
    onClick.navigate('Register');
  };

  const navToForgetPassword = () => {
    onClick.navigate('ForgetPassword');
  };

  const navToNews = () => {
    onClick.navigate('NewsContainer');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Style.screen}>
      {/* <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      /> */}
      <Animatable.View>
        <AuthNewHeader />
      </Animatable.View>

      <Animatable.View animation={'fadeInUpBig'}>
        <ScrollView
          contentContainerStyle={Style.ScrollViewStyle}
          scrollEventThrottle={20}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
          <View>
            <View>
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

              <AuthButton
                btnTitle="دخول"
                onPress={() => {
                  navToRegister();
                }}
              />
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
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Login;
