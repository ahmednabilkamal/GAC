import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * Components
 */
import EntireHeader from '../../components/EntireHeader/EntireHeader';

/**
 * Style
 */
import Style from './Style';

const MultiMedia = () => {
  return (
    <Animatable.View animation={'fadeInUpBig'} style={Style.screen}>
      <EntireHeader headerTitle="المركز الإعلامي (الوسائط المتعددة)">
        <Text style={Style.headerTxt}>مجلدات الأحداث</Text>
        <Text style={Style.subHeaderTxt}>إختر الحدث وشاهد الصور والفيديو</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Style.container}>
            <View style={Style.innerContainer}>
              <View style={Style.containerOne}>
                <View style={Style.firstColumn}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.firstColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>2000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>3000 فيديو</Text>
                  </View>
                </View>

                <View style={Style.secondColumns}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.secondColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>5000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>8888 فيديو</Text>
                  </View>
                </View>

                <View style={Style.secondColumns}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.secondColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>5000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>8888 فيديو</Text>
                  </View>
                </View>
              </View>

              <View style={Style.containerTwo}>
                <View style={Style.secondColumns}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.secondColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>5000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>8888 فيديو</Text>
                  </View>
                </View>

                <View style={Style.secondColumn}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.secondColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>5000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>8888 فيديو</Text>
                  </View>
                </View>

                <View style={Style.firstColumn}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../assets/multimedia.png')}
                    style={Style.firstColumnImg}
                  />
                  <View style={Style.imgDetails}>
                    <Text style={Style.numberOfImgTxt}>2000 صور</Text>
                    <Text style={Style.numberOfImgTxt}>3000 فيديو</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </EntireHeader>
    </Animatable.View>
  );
};

export default MultiMedia;
