import 'react-native-gesture-handler';
import React from 'react';

/**
 * navigation
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Screens
 */
import NewsContainer from '../screens/News/NewsContainer/NewsContainer';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import PDF from '../screens/PDF/PDF';
import Calendar from '../screens/Calendar/Calendar';

import AboutUs from '../screens/AboutUs/AboutUs';
import ManagerSpeech from '../screens/ManagerSpeech/ManagerSpeech';
import OurBranches from '../screens/OurBranches/OurBranches';
import AboutUsContainer from '../screens/TabsContainers/AboutUsContainer/AboutUsContainer';

/**
 * Component
 */
import Header from '../components/Header/Header';
import '../Utils/i18n.config';

/**
 * Style
 */
// import Style from './Style';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'NewsContainer'}>
        <Stack.Screen
          name="NewsContainer"
          component={NewsContainer}
          options={{header: () => <Header headerTitle="الأخبار" />}}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF"
          component={PDF}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{header: () => <Header headerTitle="تقويم الأحداث" />}}
        />
        <Stack.Screen
          name="AboutUsContainer"
          component={AboutUsContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagerSpeech"
          component={ManagerSpeech}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OurBranches"
          component={OurBranches}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
