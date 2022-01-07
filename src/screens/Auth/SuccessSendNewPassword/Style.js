import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width, height} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    alignSelf: 'center',
    height: height * 0.7,
    backgroundColor: Colors.white,
    width: width * 0.8,
    alignItems: 'center',
    marginTop: height * 0.12,
    borderTopEndRadius: 80,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 38,
    borderBottomEndRadius: 8,
    borderWidth: 1,
    borderColor: Colors.greyHeavy,
    padding: 40,
  },
  successContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  imgHeader: {
    width: width * 0.35,
    height: height * 0.15,
    alignSelf: 'center',
  },
  successTxt: {
    color: Colors.black,
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 20,
  },
  content: {
    color: Colors.black2,
    fontSize: 18,
    marginTop: 25,
    alignSelf: 'center',
  },
  userEmail: {
    color: Colors.blue,
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'center',
  },
  openMailApp: {
    backgroundColor: Colors.red,
    borderTopEndRadius: 20,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 8,
    padding: 15,
    marginTop: 30,
  },
  mailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  openAppTxt: {
    color: Colors.white,
    fontSize: 24,
  },
  mailImg: {
    alignSelf: 'center',
  },
  mailImgContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 6,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 6,
    padding: 10,
    backgroundColor: Colors.white,
  },
  resendAgain: {
    color: Colors.black2,
    fontSize: 18,
  },
});

export default Style;
