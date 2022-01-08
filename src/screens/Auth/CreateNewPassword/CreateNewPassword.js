import React, {useState, useEffect, useRef} from 'react';
import {View, LogBox, Animated, ScrollView} from 'react-native';
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

const CreateNewPassword = () => {
  const onClick = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToLogin = () => {
    onClick.navigate('Login');
  };

  // const navToSuccessSendNewPassword = () => {
  //   onClick.navigate('SuccessSendNewPassword');
  // };

  const navToCalendar = () => {
    onClick.navigate('Calendar');
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          // style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
          <View>
            <View>
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
                  navToCalendar();
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default CreateNewPassword;
