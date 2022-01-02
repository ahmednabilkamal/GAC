import {StyleSheet, Dimensions} from 'react-native';

/**
 * Color
 */
import Colors from '../../constants/Colors';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

const Style = StyleSheet.create({
  newsItem: {
    flexDirection: 'row',
    width: width,
  },
  newsImg: {
    width: width * 0.27,
    height: 105,
    borderWidth: 1,
    borderColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 8,
    margin: 12,
  },
  newsContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: width * 0.6,
  },
  newsTitle: {
    color: Colors.black,
    fontSize: 18,
  },
  newsDate: {
    color: Colors.blackHeavy,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
  },
  line: {
    marginVertical: 10,
    borderBottomColor: Colors.greyLight,
    borderBottomWidth: 1,
  },
});

export default Style;
