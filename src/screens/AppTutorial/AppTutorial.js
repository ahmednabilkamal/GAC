import React, {useEffect} from 'react';
import {
  View,
  Text,
  LogBox,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Style from './Style';

const AppTutorial = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <View style={Style.screen}>
      <View style={{flex: 1}}>
        <StatusBar hidden />
        <Image
          style={Style.logo}
          source={require('../../../assets/tutorial_logo.png')}
        />

        <View style={Style.slider}>
          <View style={Style.item}>
            <ImageBackground
              resizeMode="contain"
              style={Style.appTutorialItem}
              source={require('../../../assets/tutorial3.png')}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={Style.startContainer}>
        <Image source={require('../../../assets/start_tutorial.png')} />
        <Text style={Style.startTxt}>إبدا</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppTutorial;
