import {StyleSheet} from 'react-native';

/**
 * Colors
 */
import Colors from '../../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    backgroundColor: Colors.white,
    flex: 1,
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
