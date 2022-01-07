import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {height, width} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    // height: height,
  },
  loginFooter: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  createNewAccount: {
    fontSize: 18,
    color: Colors.black,
    // textAlign: 'right',
  },
  RePassword: {
    fontSize: 18,
    color: Colors.black,
    // textAlign: 'left',
  },
});

export default Style;
