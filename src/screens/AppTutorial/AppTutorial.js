import React, {useEffect} from 'react';
import {
  View,
  Text,
  LogBox,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

/**
 * component
 */
import AppTutorialItem from '../../components/AppTutorialItem/AppTutorialItem';

/**
 * style
 */
import Style from './Style';

const AppTutorial = () => {
  const onClick = useNavigation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const navToLogin = () => {
    onClick.navigate('Login');
  };

  return (
    <View style={Style.screen}>
      <StatusBar hidden />
      <Animatable.View animation={'fadeInUpBig'}>
        <Image
          style={Style.logo}
          source={require('../../../assets/tutorial_logo.png')}
        />
      </Animatable.View>

      {/* <Animatable.View animation={'fadeInUpBig'}> */}
      <AppTutorialItem />
      {/* </Animatable.View> */}

      <Animatable.View animation={'fadeInUpBig'}>
        <TouchableOpacity
          style={Style.startContainer}
          onPress={() => {
            navToLogin();
          }}>
          <Image source={require('../../../assets/start_tutorial.png')} />
          <Text style={Style.startTxt}>إبدا</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default AppTutorial;
