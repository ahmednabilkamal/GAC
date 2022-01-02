import {Dimensions, StyleSheet} from 'react-native';

/**
 * color
 */
import Colors from '../../constants/Colors';

/**
 * screen width
 */
const {width} = Dimensions.get('screen');

const Style = StyleSheet.create({
  calendarEventItem: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginTop: 15,
    marginStart: 36,
  },
  calendarEventTime: {
    backgroundColor: Colors.whiteLight,
    borderTopEndRadius: 8,
    borderTopStartRadius: 20,
    borderBottomColor: 8,
    padding: 8,
    width: width * 0.25,
  },
  time: {
    fontSize: 16,
    color: Colors.black,
  },
  timeLine: {
    marginVertical: 10,
    borderBottomWidth: 9,
    borderRadius: 8,
  },
  calendarEventContent: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: 11,
  },
  calendarEventText: {
    color: Colors.black,
    fontSize: 18,
    width: width * 0.55,
  },
  line: {
    marginVertical: 10,
    borderBottomColor: Colors.greyLight,
    borderBottomWidth: 1,
  },
});

export default Style;
