import React from 'react';
import {View, Image} from 'react-native';

import Style from './Style';

const ImageGalleryItem = props => {
  return (
    <View style={Style.imgItemContainer}>
      <View style={Style.horizontalImgs}>
        <Image source={props.sourceFirstImg} style={Style.horizontalFirstImg} />
        <Image
          source={props.sourceSecondImg}
          style={Style.horizontalSecondImg}
        />
      </View>
      <Image source={props.sourceThirdImg} style={Style.fullSizeImg} />
    </View>
  );
};

export default ImageGalleryItem;
