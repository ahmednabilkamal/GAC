import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  authBtn: {
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: Colors.red,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 20,
    borderTopStartRadius: 8,
    paddingVertical: 15,
    marginVertical: 50,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default Style;
