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
  img: {
    width: width,
    height: height * 0.5,
    flex: 1,
  },
  headerImg: {
    height: height * 0.4,
  },
  back: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    marginStart: 30,
    alignItems: 'center',
    marginTop: 50,
  },
  backText: {
    marginStart: 5,
    color: 'white',
    fontSize: 16,
  },
  headerTitleContainer: {
    // marginEnd: 18,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 30,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: 'din-next-lt-w23-regular',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginHorizontal: width * 0.1,
    width: width * 0.8,
  },
});

export default Style;
