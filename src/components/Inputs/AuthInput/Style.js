import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../../constants/Colors';

const Style = StyleSheet.create({
  authInput: {
    width: width * 0.8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    alignSelf: 'center',
    marginTop: 40,
  },
  inputTitle: {
    color: Colors.black,
    opacity: 0.8,
  },
  input: {
    textAlign: 'right',
    color: Colors.black,
  },
  passwordIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
  },
});

export default Style;
