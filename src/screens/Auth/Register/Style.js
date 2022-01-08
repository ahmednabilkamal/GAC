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
    // backgroundColor: Colors.white,
    height: height,
    flex: 1,
  },
  ScrollViewStyle: {
    // marginBottom: 0,
    marginTop: height * 0.44,
    backgroundColor: 'white',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 20,
    paddingTop: '10%',
    // marginBottom: height * 0.38,
    // flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginBottom: 40,
  },
  createNewAccount: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'right',
  },
  RePassword: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'left',
  },
});

export default Style;
