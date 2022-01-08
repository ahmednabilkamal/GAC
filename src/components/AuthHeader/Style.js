import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen height
 */
const {height} = Dimensions.get('screen');

/**
 * Colors
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  header: {
    // height: height * 0.03,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  back: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
  },
  backText: {
    marginStart: 5,
    color: 'black',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 28,
    color: Colors.black,
    position: 'absolute',
    right: 0,
  },
});

export default Style;
