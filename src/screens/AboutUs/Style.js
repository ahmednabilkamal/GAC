import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

/**
 * color
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 10,
    width: width * 0.9,
  },
  newsTitle: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 35,
    marginEnd: 14,
  },
  newsContent: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 20,
    marginStart: 50,
    opacity: 0.73,
  },
  aboutUsImg: {
    alignSelf: 'center',
    marginStart: 70,
  },
});

export default Style;
