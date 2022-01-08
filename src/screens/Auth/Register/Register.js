import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  LogBox,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

/**
 * Components
 */
import AuthButton from '../../../components/AuthButton/AuthButton';
import AuthInput from '../../../components/Inputs/AuthInput/AuthInput';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import AuthNewHeader from '../../../components/HomeHeader/AuthNewHeader';

/**
 * Style
 */
import Style from './Style';

const Register = () => {
  const onClick = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToLogin = () => {
    onClick.navigate('Login');
  };

  const navToCreatePassword = () => {
    onClick.navigate('CreateNewPassword');
  };

  const navToAboutUs = () => {
    onClick.navigate('AboutUsContainer');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Animatable.View>
        <AuthNewHeader />
      </Animatable.View>

      <Animatable.View animation={'fadeInUpBig'}>
        <ScrollView
          contentContainerStyle={Style.ScrollViewStyle}
          scrollEventThrottle={20}
          showsVerticalScrollIndicator={false}
          // style={Style.screen}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
          <View>
            <View>
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
              <AuthButton
                btnTitle="دخول"
                onPress={() => {
                  navToAboutUs();
                }}
              />
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
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Register;
