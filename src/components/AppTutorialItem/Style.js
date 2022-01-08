import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen width & height
 */
const {height, width} = Dimensions.get('screen');

/**
 * color
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  slider: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  item: {
    borderColor: '#eae9e9',
    borderWidth: 10,
    borderTopEndRadius: 200,
    borderTopStartRadius: 200,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.81,
    shadowRadius: 4,
    elevation: 10,
  },
  appTutorialItem: {
    height: height * 0.58,
    alignSelf: 'center',
  },
  fakeView: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    borderTopEndRadius: 80,
    alignItems: 'center',
    width: width * 0.8,
  },
  title: {
    color: Colors.red,
    fontSize: 24,
    marginTop: 10,
  },
  content: {
    color: Colors.black,
    fontSize: 18,
    marginVertical: 18,
    marginHorizontal: 10,
    height: 60,
    textAlign: 'center',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  paginationDots: {
    height: 8,
    // width: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
});

export default Style;
