import React from 'react';
import * as Animatable from 'react-native-animatable';

/**
 * Redux
 */
import {useSelector} from 'react-redux';

/**
 * Components
 */
import AboutUsTabs from '../../Tabs/AboutUsTabs/AboutUsTabs';
import EntireHeader from '../../../components/EntireHeader/EntireHeader';

/**
 * Screens
 */
import AboutUs from '../../AboutUs/AboutUs';
import ManagerSpeech from '../../ManagerSpeech/ManagerSpeech';
import OurBranches from '../../OurBranches/OurBranches';

/**
 * Style
 */
import Style from './Style';

const AboutUsContainer = () => {
  const aboutUs = useSelector(state => state.aboutUs);

  return (
    <Animatable.View animation={'fadeInUpBig'} style={Style.newsContainer}>
      <EntireHeader headerTitle="عن جمارك أبو ظبي">
        <AboutUsTabs />

        {aboutUs.showAboutUs === true ? <AboutUs /> : null}
        {aboutUs.showManagerSpeech === true ? <ManagerSpeech /> : null}
        {aboutUs.showOurBranches === true ? <OurBranches /> : null}
      </EntireHeader>
    </Animatable.View>
  );
};

export default AboutUsContainer;
