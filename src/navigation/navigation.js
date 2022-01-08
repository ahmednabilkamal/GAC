import 'react-native-gesture-handler';
import React from 'react';

/**
 * navigation
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * News & Calendar Screens
 */
import NewsContainer from '../screens/TabsContainers/NewsContainer/NewsContainer';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import PDF from '../screens/PDF/PDF';
import Calendar from '../screens/Calendar/Calendar';

/**
 * About Us Screens
 */
import AboutUs from '../screens/AboutUs/AboutUs';
import ManagerSpeech from '../screens/ManagerSpeech/ManagerSpeech';
import OurBranches from '../screens/OurBranches/OurBranches';
import AboutUsContainer from '../screens/TabsContainers/AboutUsContainer/AboutUsContainer';

/**
 * Auth Screens
 */
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Register/Register';
import ForgetPassword from '../screens/Auth/ForgetPassword/ForgetPassword';
import CreateNewPassword from '../screens/Auth/CreateNewPassword/CreateNewPassword';
import SuccessSendNewPassword from '../screens/Auth/SuccessSendNewPassword/SuccessSendNewPassword';

/**
 * Splash & Tutorial Screens
 */
import AppTutorial from '../screens/AppTutorial/AppTutorial';
import Splash from '../screens/Splash/Splash';

/**
 * Component
 */
import Header from '../components/Header/Header';
import '../Utils/i18n.config';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        {/* splash & tutorial screens */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppTutorial"
          component={AppTutorial}
          options={{headerShown: false}}
        />

        {/* auth screens */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessSendNewPassword"
          component={SuccessSendNewPassword}
          options={{headerShown: false}}
        />

        {/* news & calendar screens */}
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

        {/* about us screens */}
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
