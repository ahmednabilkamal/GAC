import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  PixelRatio,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Gradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
import Svg, {Path, Rect, LinearGradient, Defs, Stop} from 'react-native-svg';

const Header = left => {
  const [animation, setAnimation] = useState({
    visible: false,
    type: '',
  });

  const animate = type => {
    setAnimation({visible: false, type});
    setTimeout(() => {
      setAnimation({visible: true, type});
    }, 0);
  };

  useEffect(() => {
    animate('fadeInLeft');
  }, []);
  const prop = animation.visible ? {animation: animation.type} : {};

  return (
    <>
      {
        <Animatable.View style={{height: '1%'}}>
          <Image
            source={require('../../../assets/head.png')}
            style={styles.banner}
          />
          {animation.visible && (
            <Animatable.View animation={'fadeInLeft'} duration={2000}>
              <View
                style={{
                  width: '70%',
                  height: height * 0.12,
                  borderRadius: 300,
                  backgroundColor: 'white',
                  alignSelf: 'flex-end',
                  top: height * 0.11,
                  position: 'absolute',

                  end: '-10%',
                  alignContent: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <Image
                  source={require('../../../assets/tutorial_logo.png')}
                  style={{
                    height: '60%',
                    width: '90%',
                    marginTop: '2%',
                    marginStart: width * 0.01,
                    resizeMode: 'contain',
                  }}
                />

                <Svg
                  style={{
                    height: height * 0.1,
                    width: width * 0.2,
                    top: height * -0.08,
                    right: width * 0.03,
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    transform: [{rotateZ: '88deg'}, {rotateX: '0deg'}],
                  }}>
                  <Path
                    stroke={2}
                    fill={'white'}
                    transform={'translate(-8583.577 1216.143)'}
                    d={
                      'M8656-1139.731v-76.412s-2.23,51.281-57.247,51.451S8656-1139.731,8656-1139.731Z'
                    }
                  />
                </Svg>

                <Svg
                  style={{
                    height: height * 0.1,
                    width: width * 0.2,
                    top: height * 0.1,
                    right: width * 0.03,
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    transform: [{rotateZ: '100deg'}, {rotateY: '180deg'}],
                  }}>
                  <Path
                    stroke={2}
                    fill={'white'}
                    transform={'translate(-8583.577 1216.143)'}
                    d={
                      'M8656-1139.731v-76.412s-2.23,51.281-57.247,51.451S8656-1139.731,8656-1139.731Z'
                    }
                  />
                </Svg>
              </View>
            </Animatable.View>
          )}

          <View style={{position: 'absolute', width: '100%'}}>
            <View style={styles.parent}>
              <View style={styles.child}>
                <Text> </Text>
              </View>
            </View>
            <Text
              style={{
                position: 'absolute',
                fontSize: 26,
                justifyContent: 'center',
                alignSelf: 'flex-start',
                left: 30,
                top: '1100%',
                color: 'white',
                fontWeight: '100',
              }}>
              أهلا ومرحبا بك في {'\n'} الإدارة العامة للجمارك (ابوظبي)
            </Text>
          </View>
        </Animatable.View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: '30%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 0,
    overflow: 'hidden',
  },
  child: {
    height: '30%',
    transform: [{scaleX: 0.5}],
    borderBottomStartRadius: 100,
    backgroundColor: 'transparent',
  },
  banner: {
    alignSelf: 'center',
    width: width,
    height: height * 0.51,
    resizeMode: 'stretch',
    position: 'absolute',
    backgroundColor: 'white',
    borderTopRightRadius: 0,
    // marginTop: 20,
    opacity: 1,
  },
});

export default Header;
