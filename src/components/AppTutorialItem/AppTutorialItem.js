/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * style & colors
 */
import Style from './Style';
import Colors from '../../constants/Colors';

const {width, height} = Dimensions.get('window');

const AppTutorialItem = props => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <SafeAreaView style={Style.fakeView}>
        <ScrollView
          style={Style.fakeView}
          horizontal={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            setSliderPage(event);
          }}
          pagingEnabled={true}>
          {/* screen one */}
          <View style={{width, height}}>
            <Animatable.View animation={'fadeInUpBig'}>
              <View style={Style.slider}>
                <View style={Style.item}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={Style.appTutorialItem}
                    source={require('../../../assets/tutorial2.png')}>
                    <View style={Style.fakeView} />
                    <View style={Style.contentContainer}>
                      <Text style={Style.title}>نسعد بإستفساراتك</Text>
                      <Text style={Style.content}>
                        متواجدين على مدار الساعة للرد على كافة الاستفسارات
                        الخاصة بجمارك أبو ظبي
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </Animatable.View>
          </View>

          {/* screen two */}
          <View style={{width, height}}>
            <Animatable.View animation={'fadeInUpBig'}>
              <View style={Style.slider}>
                <View style={Style.item}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={Style.appTutorialItem}
                    source={require('../../../assets/tutorial3.png')}>
                    <View style={Style.fakeView} />
                    <View style={Style.contentContainer}>
                      <Text style={Style.title}>قيم جمارك أبوظبي</Text>
                      <Text style={Style.content}>
                        التمكين, التعاون, الابتكار, الشراكة النزاهة, المسائلة
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </Animatable.View>
          </View>

          {/* screen three */}
          <View style={{width, height}}>
            <Animatable.View animation={'fadeInUpBig'}>
              <View style={Style.slider}>
                <View style={Style.item}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={Style.appTutorialItem}
                    source={require('../../../assets/tutorial4.png')}>
                    <View style={Style.fakeView} />
                    <View style={Style.contentContainer}>
                      <Text style={Style.title}>رؤية جمارك أبوظبي</Text>
                      <Text style={Style.content}>
                        هيئة جمركية رائدة عالميا, تقود التغيير سعيا لتعزيز
                        وتسهيل التجارة وتقديم خدمات متميزة
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </Animatable.View>
          </View>

          {/* screen four */}
          <View style={{width, height}}>
            <Animatable.View animation={'fadeInUpBig'}>
              <View style={Style.slider}>
                <View style={Style.item}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={Style.appTutorialItem}
                    source={require('../../../assets/tutorial1.png')}>
                    <View style={Style.fakeView} />
                    <View style={Style.contentContainer}>
                      <Text style={Style.title}>خدمات جمارك أبوظبي</Text>
                      <Text style={Style.content}>
                        الاتفاقيات, قوائم السلع, التطبيقات التعاميم, جهات اعتماد
                        التصديقات
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </Animatable.View>
          </View>
        </ScrollView>
        {/* </Animatable.View> */}
      </SafeAreaView>

      {/* slider indicator */}
      <View style={Style.paginationWrapper}>
        {Array.from(Array(4).keys()).map((key, index) => (
          <View
            style={[
              Style.paginationDots,
              {backgroundColor: pageIndex === index ? Colors.red : '#B4B1B1'},
              {width: pageIndex === index ? 30 : 8},
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

export default AppTutorialItem;
