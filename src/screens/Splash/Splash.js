import React, {useEffect} from 'react';
import {View, LogBox, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/**
 * style
 */
import Style from './Style';

const Splash = () => {
  const onClick = useNavigation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
    setTimeout(() => {
      onClick.replace('AppTutorial');
    }, 1000);
  });

  return (
    <View style={Style.screen}>
      <Image
        style={Style.logo}
        source={require('../../../assets/tutorial_logo.png')}
      />
    </View>
  );
};

export default Splash;
