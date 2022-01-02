import {StyleSheet, Dimensions} from 'react-native';

/**
 * color
 */
import Colors from '../../constants/Colors';

/**
 * screen width and height
 */
const {height, width} = Dimensions.get('screen');

const Style = StyleSheet.create({
  header: {
    height: height * 0.09,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
  },
  search: {
    position: 'absolute',
    right: 0,
    marginEnd: 40,
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: width,
    color: Colors.black,
  },
  back: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    marginStart: 35,
    alignItems: 'center',
  },
  backText: {
    marginStart: 5,
    color: 'black',
    fontSize: 16,
  },
});

export default Style;
