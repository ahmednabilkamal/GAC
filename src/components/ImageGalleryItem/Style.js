import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width
 */
const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  imgItemContainer: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  horizontalImgs: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  horizontalFirstImg: {
    width: width * 0.42,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  horizontalSecondImg: {
    width: width * 0.42,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  fullSizeImg: {
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15,
    height: height * 0.23,
  },
});

export default Style;
