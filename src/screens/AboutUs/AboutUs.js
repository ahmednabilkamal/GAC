import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * Style
 */
import Style from './Style';

const AboutUs = () => {
  return (
    <ScrollView>
      <Animatable.View animation={'fadeInUpBig'} style={Style.screen}>
        <Image
          resizeMode="contain"
          style={Style.aboutUsImg}
          source={require('../../../assets/about_us.png')}
        />

        <Text style={Style.newsContent}>
          الإدارة العامة للجمارك بأبوظبي هي جهة حكومية إلى تنفيذ السياسة
          الجمركية المقررة من السلطة
        </Text>

        <Text style={Style.newsContent}>
          المختصة والإشراف على دخول البضائع الي البلاد إوخروجها منها وتحصيل
          الرسوم الجمركية المقررة على البضائع وفقا للقوانين
        </Text>

        <Text style={Style.newsContent}>
          الإدارة العامة للجمارك بأبوظبي هي جهة إلى تنفيذ السياسة الجمركية
          المقررة من السلطة المختصة والإشراف على دخول البضائع الي البلاد
          إوخروجها منها وتحصيل الرسوم الجمركية البضائع وفقا للقوانين والأنظمة
          المعمول بها بالدولة
        </Text>
      </Animatable.View>
    </ScrollView>
  );
};

export default AboutUs;
