import {StyleSheet} from 'react-native';

/**
 * Color
 */
import Colors from '../constants/Colors';

const Style = StyleSheet.create({
  bottomBar: {
    flex: 1,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTabBarItem: {
    flex: 1,
    justifyContent: 'center',
  },
  menuBorder: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Style;
