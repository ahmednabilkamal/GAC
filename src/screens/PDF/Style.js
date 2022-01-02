import {Dimensions, StyleSheet} from 'react-native';

/**
 * color
 */
import Colors from '../../constants/Colors';

/**
 * screen width and height
 */
const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  img: {
    width: width,
    height: height * 0.4,
  },
  content: {
    backgroundColor: 'white',
    borderTopStartRadius: 80,
    borderTopEndRadius: 20,
    height: height,
  },
  headerImg: {
    height: height * 0.3,
  },
  back: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    marginStart: 35,
    alignItems: 'center',
    marginTop: 50,
  },
  backText: {
    marginStart: 5,
    color: 'white',
    fontSize: 16,
  },
  headerTitleContainer: {
    marginEnd: 38,
    marginTop: 100,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 28,
    marginVertical: 4,
  },
  pdfImg: {
    alignSelf: 'center',
    marginTop: 41,
    height: height * 0.56,
    width: width * 0.8,
  },
});

export default Style;
