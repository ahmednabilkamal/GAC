import React from 'react';
import {View, Text} from 'react-native';

/**
 * Style
 */
import Style from './Style';

const CalendarEventItem = props => {
  return (
    <View>
      <View style={Style.calendarEventItem}>
        <View style={Style.calendarEventTime}>
          <Text style={Style.time}>10 - 11 PM</Text>
          <View
            style={[
              Style.timeLine,
              {borderBottomColor: props.borderBottomColor},
            ]}
          />
        </View>

        <View style={Style.calendarEventContent}>
          <Text style={Style.calendarEventText} numberOfLines={4}>
            جمارك أبوظبي وجمارك دبي توقعان اتفاقية ومذكرة تفاهم مع الهيئة
          </Text>
        </View>
      </View>
      <View style={Style.line} />
    </View>
  );
};

export default CalendarEventItem;
