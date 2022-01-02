import {StyleSheet, Dimensions} from 'react-native';

/**
 * Color
 */
import Colors from '../../../constants/Colors';

/**
 * screen width and height
 */
const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  newsTab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    width: width,
    backgroundColor: 'white',
  },
  tabText: {
    marginVertical: 30,
    fontSize: 18,
    opacity: 1,
    color: Colors.grey,
  },
  tabTextDisable: {
    marginVertical: 30,
    fontSize: 18,
    opacity: 1,
    color: Colors.black,
  },
  redPoint: {
    borderRadius: 40,
    width: width * 0.022,
    height: height * 0.013,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: -27,
  },
});

export default Style;
