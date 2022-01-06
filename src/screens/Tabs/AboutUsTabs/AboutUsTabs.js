import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

/**
 * Redux & Actions
 */
import {useSelector, useDispatch} from 'react-redux';
import {
  AboutUsAction2,
  ManagerSpeechAction2,
  OurBranchesAction2,
} from '../../../redux/reducers/AboutUsReducers/AboutUsReducers';

/**
 * Style
 */
import Style from './Style';

const AboutUsTabs = () => {
  const dispatch = useDispatch();
  const aboutUs = useSelector(state => state.aboutUs);

  console.log(aboutUs);

  return (
    <View>
      <View style={Style.newsTab}>
        {aboutUs.showOurBranches === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(OurBranchesAction2(false, false, true));
            }}>
            <Text style={Style.tabTextDisable}>فروعنا</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(OurBranchesAction2(false, false, true));
            }}>
            <Text style={Style.tabText}>فروعنا</Text>
          </TouchableOpacity>
        )}

        {aboutUs.showManagerSpeech === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(ManagerSpeechAction2(false, true, false));
            }}>
            <Text style={Style.tabTextDisable}>كلمة المدير العام</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(ManagerSpeechAction2(false, true, false));
            }}>
            <Text style={Style.tabText}>كلمة المدير العام</Text>
          </TouchableOpacity>
        )}

        {aboutUs.showAboutUs === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(AboutUsAction2(true, false, false));
            }}>
            <Text style={Style.tabTextDisable}>عن جمارك أبوظبي</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(AboutUsAction2(true, false, false));
            }}>
            <Text style={Style.tabText}>عن جمارك أبوظبي</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AboutUsTabs;
