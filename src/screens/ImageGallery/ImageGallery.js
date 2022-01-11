import React, {useEffect} from 'react';
import {View, LogBox, ScrollView} from 'react-native';

/**
 * Components
 */
import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';

/**
 * Style
 */
import Style from './Style';

const ImageGallery = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ScrollView>
      <View style={Style.screen}>
        <ImageGalleryItem
          sourceFirstImg={require('../../../assets/gallery1.png')}
          sourceSecondImg={require('../../../assets/gallery2.png')}
          sourceThirdImg={require('../../../assets/gallery3.png')}
        />
        <ImageGalleryItem
          sourceFirstImg={require('../../../assets/gallery4.png')}
          sourceSecondImg={require('../../../assets/gallery5.png')}
          sourceThirdImg={require('../../../assets/gallery6.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ImageGallery;
