import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {width, height} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    backgroundColor: Colors.black,
    // flex: 1,
    width: width,
    height: height,
  },
});

export default Style;
