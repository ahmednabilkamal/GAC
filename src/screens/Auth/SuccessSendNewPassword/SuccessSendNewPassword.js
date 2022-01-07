import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  LogBox,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Style from './Style';

const SuccessSendNewPassword = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ImageBackground
      style={Style.screen}
      source={require('../../../../assets/success_bg.png')}>
      <View style={Style.container}>
        <StatusBar hidden />
        <View style={Style.successContainer}>
          <Image
            style={Style.imgHeader}
            source={require('../../../../assets/email.png')}
          />
          <Text style={Style.successTxt}>تم الإرسال بنجاح</Text>
          <Text style={Style.content}>
            لقد ارسلنا رابط انشاء كلمة المرور الجديدة الي بريدك الإلكتروني
          </Text>
          <Text style={Style.userEmail}>Emad@Example.com</Text>

          <TouchableOpacity style={Style.openMailApp}>
            <View style={Style.mailContainer}>
              <Text style={Style.openAppTxt}>فتح تطبيق</Text>
              <View style={Style.mailImgContainer}>
                <Image
                  style={Style.mailImg}
                  source={require('../../../../assets/gmail.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={Style.resendAgain}>إعادة ارسال الرابط من جديد</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SuccessSendNewPassword;
