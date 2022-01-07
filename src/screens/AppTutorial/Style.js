import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {width, height} = Dimensions.get('screen');

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
  slider: {
    marginTop: height * 0.1,
    height: height * 0.65,
    width: width * 0.7,
    alignSelf: 'center',
  },
  item: {
    borderColor: '#eae9e9',
    borderWidth: 10,
    borderTopEndRadius: 200,
    borderTopStartRadius: 200,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    width: width * 0.72,
  },
  appTutorialItem: {
    // alignSelf: 'center',
    // height: height * 0.65,
    // width: width * 0.7,
  },
  startContainer: {
    borderTopEndRadius: 53,
    backgroundColor: Colors.red,
    width: width * 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 76,
    alignContent: 'center',
  },
  startTxt: {
    color: Colors.white,
    fontSize: 34,
  },
});

export default Style;
