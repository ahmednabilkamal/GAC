import {StyleSheet} from 'react-native';

/**
 * color
 */
import Colors from '../../constants/Colors';

const Style = StyleSheet.create({
  screen: {
    backgroundColor: Colors.whiteLight,
    flex: 1,
  },
  monthName: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteLight,
    alignItems: 'center',
    marginStart: 30,
  },
  calenderIcon: {
    marginStart: 10,
    marginTop: 30,
  },
  monthNameTxt: {
    color: Colors.black,
    fontSize: 24,
    // marginEnd: 10,
    marginTop: 30,
    marginStart: 10,
  },
  calendarHeader: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
    color: '#BFBFBF',
  },
  calendarView: {
    marginHorizontal: 20,
  },
  calendarEvents: {
    backgroundColor: Colors.white,
  },
});

export default Style;
