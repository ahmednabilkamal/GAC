import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * Style
 */
import Style from './Style';

const ManagerSpeech = () => {
  return (
    <ScrollView>
      <Animatable.View animation={'fadeInUpBig'} style={Style.screen}>
        <Image
          resizeMode="contain"
          style={Style.managerSpeechImg}
          source={require('../../../assets/manager.png')}
        />

        <Text style={Style.newsContent}>
          تلعب الإدارة العامة للجمارك دوراً رائداً وحيوياً في تحقيق نهضة أبوظبي
          من خلال الدعم المتواصل الذيتقدمه لاقتصاد وأمن دولة الإمارات العربية
          المتحدة
        </Text>

        <Text style={Style.newsContent}>
          وأثمر التزام الإدارة العامة للجمارك بالتوجيهاتالرشيدة لصاحب السمو
          الشيخخليفة بن زايد آل نهيان، رئيس الدولة حفظه اللهوصاحب السمو الشيخ
          محمد بن زايد آل نهيانولي عهد أبوظبي، نائب القائد الأعلى
        </Text>
      </Animatable.View>
    </ScrollView>
  );
};

export default ManagerSpeech;
