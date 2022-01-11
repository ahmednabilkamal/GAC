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
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    padding: 10,
  },
  headerTxt: {
    fontSize: 24,
    color: Colors.black,
    marginTop: 40,
    marginStart: 50,
  },
  subHeaderTxt: {
    color: Colors.grey,
    fontSize: 16,
    marginStart: 50,
  },
  innerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 30,
  },
  containerOne: {
    width: width * 0.4,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  secondColumns: {
    width: width * 0.4,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  firstColumn: {
    width: width * 0.4,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  firstColumnImg: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.5,
  },
  secondColumnImg: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.2,
  },
  imgDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberOfImgTxt: {
    color: Colors.redHeavy,
    fontSize: 14,
  },
  secondColumn: {
    width: width * 0.4,
    marginHorizontal: 10,
  },
});

export default Style;
