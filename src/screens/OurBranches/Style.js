import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

const Style = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 10,
  },
  branchesImg: {
    width: width * 0.9,
    marginStart: 20,
  },
});

export default Style;
