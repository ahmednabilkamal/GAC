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
    // flex: 1,
  },
  img: {
    width: width,
  },
  content: {
    backgroundColor: 'white',
    borderTopStartRadius: 80,
    borderTopEndRadius: 20,
    position: 'absolute',
    bottom: 0,
    // flex: 1,
    height: height * 0.6,
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
    marginEnd: 18,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 20,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 25,
    marginVertical: 4,
    fontFamily: 'din-next-lt-w23-regular',
  },
  pdfImg: {
    alignSelf: 'center',
    marginTop: 41,
  },
  newsDetailsHeader: {
    flexDirection: 'row',
    // alignSelf: 'center',
    marginTop: 20,
    // justifyContent: 'space-between',
    marginStart: width * 0.1,
  },
  bookmark: {
    backgroundColor: Colors.whiteLight,
    borderTopEndRadius: 12,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 12,
    padding: 12,
    width: 50,
    height: 45,
    marginHorizontal: 8,
  },
  bookmarkIcon: {
    alignSelf: 'center',
  },
  time: {
    backgroundColor: Colors.whiteLight,
    borderTopEndRadius: 12,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 12,
    padding: 12,
    width: 125,
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    // marginHorizontal: 16,
  },
  timeIcon: {
    alignSelf: 'center',
  },
  views: {
    backgroundColor: Colors.whiteLight,
    borderTopEndRadius: 12,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 12,
    padding: 12,
    width: 109,
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
  },
  newsDetailsHeaderText: {
    color: Colors.black,
    fontSize: 14,
  },
  newsTitle: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 35,
    marginEnd: 14,
  },
  newsContent: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 20,
    marginEnd: 36,
    marginStart: 50,
    opacity: 0.73,
    // fontFamily: 'din-next-lt-w23-regular',
  },
  newsImg: {
    width: width * 0.8,
    height: 200,
    marginTop: 36,
    alignSelf: 'center',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowColor: '#00000029',
    marginBottom: 10,
  },
});

export default Style;
