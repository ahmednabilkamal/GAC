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
    height: height * 0.44,
    flex: 1,
  },
  headerImg: {
    height: height * 0.3,
  },
  back: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    marginEnd: 30,
    alignItems: 'center',
    marginTop: 50,
  },
  backText: {
    marginStart: 5,
    color: 'white',
    fontSize: 16,
    textAlign: 'right',
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
  content: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 80,
    // position: 'absolute',
    // bottom: 0,
    height: height * 0.7,
  },
  newsDetailsHeader: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: width * 0.05,
    // flex: 1,
  },
});

export default Style;
