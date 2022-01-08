import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  View,
  LogBox,
  Animated,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

/**
 * style
 */
import Style from './Style';

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    LogBox.ignoreAllLogs();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeIn = {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  };

  // const onPress = () => {
  //   Animated.timing(fadeIn, {
  //     toValue: 0,
  //     duration: 1000,
  //   }).start();
  // };

  return (
    <View>
      <Animatable.View animation={fadeIn}>
        <Image
          style={Style.screen}
          source={require('../../../assets/success_bg.png')}
        />
      </Animatable.View>
    </View>
  );
};

export default Splash;
