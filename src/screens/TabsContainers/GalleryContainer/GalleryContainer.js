import React from 'react';
import * as Animatable from 'react-native-animatable';

/**
 * Redux
 */
import {useSelector} from 'react-redux';

/**
 * Components
 */
import GalleryTabs from '../../Tabs/GalleryTabs/GalleryTabs';
import EntireHeader from '../../../components/EntireHeader/EntireHeader';

/**
 * Screens
 */
import ImageGallery from '../../ImageGallery/ImageGallery';

/**
 * Style
 */
import Style from './Style';

const GalleryContainer = () => {
  const gallery = useSelector(state => state.gallery);

  return (
    <Animatable.View animation={'fadeInUpBig'} style={Style.galleryContainer}>
      <EntireHeader headerTitle="اسم الفعالية هنا نص تجريبي للمعاينة هنا">
        <GalleryTabs />

        {gallery.showImage === true ? <ImageGallery /> : null}
      </EntireHeader>
    </Animatable.View>
  );
};

export default GalleryContainer;
