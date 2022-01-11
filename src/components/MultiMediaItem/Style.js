import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {width, height} = Dimensions.get('screen');

/**
 * colors
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 30,
  },
  firstColumn: {
    width: width * 0.4,
    marginHorizontal: 10,
  },
  firstColumnImg: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.6,
  },
  secondColumnImg: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.4,
  },
  imgDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberOfImgTxt: {
    color: Colors.red,
    fontSize: 14,
  },
  secondColumn: {
    width: width * 0.4,
    marginHorizontal: 10,
  },
});

export default Style;
