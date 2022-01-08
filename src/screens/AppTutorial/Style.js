import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {width} = Dimensions.get('screen');

/**
 * color
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    backgroundColor: Colors.whiteLight,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 40,
  },
  startContainer: {
    borderTopEndRadius: 53,
    backgroundColor: Colors.red,
    width: width * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    alignContent: 'center',
  },
  startTxt: {
    color: Colors.white,
    fontSize: 34,
  },
});

export default Style;
