import React, {useEffect} from 'react';
import {
  View,
  Text,
  LogBox,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

/**
 * component
 */
import AppTutorialItem from '../../components/AppTutorialItem/AppTutorialItem';

/**
 * style
 */
import Style from './Style';

const AppTutorial = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <View style={Style.screen}>
      <StatusBar hidden />
      <Image
        style={Style.logo}
        source={require('../../../assets/tutorial_logo.png')}
      />

      <AppTutorialItem />

      <TouchableOpacity style={Style.startContainer}>
        <Image source={require('../../../assets/start_tutorial.png')} />
        <Text style={Style.startTxt}>إبدا</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppTutorial;
