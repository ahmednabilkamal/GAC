import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

/**
 * Redux & Actions
 */
import {useSelector, useDispatch} from 'react-redux';
import {
  ImageGalleryAction2,
  VideoGalleryAction2,
} from '../../../redux/reducers/GalleryReducers/GalleryReducers';

/**
 * Style
 */
import Style from './Style';

const AboutUsTabs = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);

  return (
    <View>
      <View style={Style.newsTab}>
        {gallery.showVideo === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(VideoGalleryAction2(true, false, false));
            }}>
            <Text style={Style.tabTextDisable}>معرض الفيديو</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(VideoGalleryAction2(true, false, false));
            }}>
            <Text style={Style.tabText}>معرض الفيديو</Text>
          </TouchableOpacity>
        )}

        {gallery.showImage === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(ImageGalleryAction2(false, true, false));
            }}>
            <Text style={Style.tabTextDisable}>معرض الصور</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(ImageGalleryAction2(false, true, false));
            }}>
            <Text style={Style.tabText}>معرض الصور</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AboutUsTabs;
