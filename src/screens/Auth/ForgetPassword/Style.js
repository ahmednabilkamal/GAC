import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {height} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  ScrollViewStyle: {
    // marginBottom: 0,
    marginTop: height * 0.44,
    backgroundColor: 'white',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 20,
    paddingTop: '10%',
    // flex: 1,
  },
});

export default Style;
