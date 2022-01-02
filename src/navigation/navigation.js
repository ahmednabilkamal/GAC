import 'react-native-gesture-handler';
import React from 'react';
// import {Alert, Animated, TouchableOpacity, View, Image} from 'react-native';

/**
 * navigation
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Screens
 */
import NewsContainer from '../screens/News/NewsContainer/NewsContainer';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import PDF from '../screens/PDF/PDF';
import Calendar from '../screens/Calendar/Calendar';

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

// const _renderIcon = (routeName, selectedTab) => {
//   let icon = '';

//   switch (routeName) {
//     case 'title1':
//       icon = 'ios-home-outline';
//       break;
//     case 'title2':
//       icon = 'settings-outline';
//       break;
//     case 'title3':
//       icon = 'settings-outline';
//       break;
//     case 'title4':
//       icon = 'settings-outline';
//       break;
//     case 'title5':
//       icon = 'settings-outline';
//       break;
//   }

//   return (
//     <Ionicons
//       name={icon}
//       size={25}
//       color={routeName === selectedTab ? 'black' : 'gray'}
//     />
//   );
// };

// const renderTabBar = ({routeName, selectedTab, navigate}) => {
//   return (
//     <TouchableOpacity
//       onPress={() => navigate(routeName)}
//       style={Style.tabBarItem}>
//       {_renderIcon(routeName, selectedTab)}
//     </TouchableOpacity>
//   );
// };

// function MyBottomTabs() {
//   return (
//     <View style={Style.bottomBar}>
//       <CurvedBottomBar.Navigator
//         type="up"
//         strokeWidth={0.5}
//         height={55}
//         circleWidth={55}
//         bgColor="white"
//         initialRouteName="title1"
//         borderTopLeftRight
//         swipeEnabled
//         renderCircle={({selectedTab, navigate}) => (
//           <Animated.View>
//             <TouchableOpacity
//               style={Style.centerTabBarItem}
//               onPress={() => Alert.alert('Click Action')}>
//               <View style={Style.menuBorder}>
//                 <Image source={require('../../assets/menu.png')} />
//               </View>
//             </TouchableOpacity>
//           </Animated.View>
//         )}
//         tabBar={renderTabBar}>
//         <CurvedBottomBar.Screen
//           name="NewsContainer"
//           position="left"
//           component={({navigate}) => <NewsContainer />}
//         />
//         <CurvedBottomBar.Screen
//           name="NewsContainer"
//           position="left"
//           component={({navigate}) => <NewsContainer />}
//         />
//         <CurvedBottomBar.Screen
//           name="title2"
//           component={({navigate}) => <NewsContainer />}
//           position="right"
//         />
//         <CurvedBottomBar.Screen
//           name="title2"
//           component={({navigate}) => <NewsContainer />}
//           position="right"
//         />
//       </CurvedBottomBar.Navigator>
//     </View>
//   );
// }

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Calendar'}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
