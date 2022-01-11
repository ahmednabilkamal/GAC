import React from 'react';
import {View, Image, Text} from 'react-native';

/**
 * style
 */
import Style from './Style';

const MultiMediaItem = props => {
  return (
    <View style={Style.container}>
      <View style={Style.firstColumn}>
        <Image
          resizeMode="cover"
          source={props.sourceFirstImg}
          style={Style.firstColumnImg}
        />
        <View style={Style.imgDetails}>
          <Text style={Style.numberOfImgTxt}>{props.numberOfImg} صور</Text>
          <Text style={Style.numberOfImgTxt}>{props.numberOfVideo} فيديو</Text>
        </View>
      </View>

      <View style={Style.secondColumn}>
        <Image
          resizeMode="cover"
          source={props.sourceSecondImg}
          style={Style.secondColumnImg}
        />
        <View style={Style.imgDetails}>
          <Text style={Style.numberOfImgTxt}>{props.numberOfImg} صور</Text>
          <Text style={Style.numberOfImgTxt}>{props.numberOfVideo} فيديو</Text>
        </View>
      </View>
    </View>
  );
};

export default MultiMediaItem;
