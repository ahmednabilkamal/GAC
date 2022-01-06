import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  I18nManager,
  LogBox,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {useTranslation} from 'react-i18next';

/**
 * Icons
 */
import CalenderIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Components
 */
import CalendarEventItem from '../../components/CalendarEventItem/CalendarEventItem';

/**
 * Style & Colors
 */
import Colors from '../../constants/Colors';
import Style from './Style';

const Calender = () => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={Style.screen}>
      <StatusBar backgroundColor={Colors.brownLight} />
      <View style={Style.monthName}>
        <CalenderIcon
          style={Style.calenderIcon}
          name="calendar"
          color={Colors.red}
          size={30}
        />
        <Text style={Style.monthNameTxt}>{t('ديسمبر')}</Text>
      </View>

      <Agenda
        selectedDay={day => {
          console.log(day);
        }}
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        // items={{
        //   '2022-01-01': [{name: 'item 1 - any js object'}],
        //   '2022-01-07': [{name: 'item 2 - any js object', height: 80}],
        //   '2022-01-20': [{name: 'item 3 - any js object'}],
        // }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={month => {
          // console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={calendarOpened => {
          // console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          // console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          // console.log('day changed');
        }}
        // Initially selected day
        // selected={'2022-01-05'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-05-31'}
        // Max amount of months allowed to scroll to the past. Default = 50
        // pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        // futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return <View />;
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return (
            <ScrollView style={Style.calendarEvents}>
              <View>
                <CalendarEventItem borderBottomColor="#EB454A" />
                <CalendarEventItem borderBottomColor="#FFA700" />
                <CalendarEventItem borderBottomColor="#B100FF" />
                <CalendarEventItem borderBottomColor="#A39161" />
                <CalendarEventItem borderBottomColor="#EB454A" />
                <CalendarEventItem borderBottomColor="#FFA700" />
                <CalendarEventItem borderBottomColor="#B100FF" />
                <CalendarEventItem borderBottomColor="#A39161" />
                <CalendarEventItem borderBottomColor="#EB454A" />
                <CalendarEventItem borderBottomColor="#FFA700" />
                <CalendarEventItem borderBottomColor="#B100FF" />
                <CalendarEventItem borderBottomColor="#A39161" />
              </View>
            </ScrollView>
          );
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return (
            <ScrollView style={Style.calendarEvents}>
              <View>
                <CalendarEventItem borderBottomColor={Colors.whiteLight} />
              </View>
            </ScrollView>
          );
        }}
        // Hide knob button. Default = false
        hideKnob={false}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2022-01-06': {
            selected: true,
            // marked: true,
            color: 'white',
            selectedColor: '#EF3D42',
            // theme: {
            //   backgroundColor: 'red',
            //   todayBackgroundColor: 'red',
            // },
            customStyles: {
              container: {
                borderRadius: 10,
                shadowOffset: {width: 5, height: 6},
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 10,
                shadowColor: '#FF003166',
                borderWidth: 2,
                borderColor: '#EF3D42',
              },
            },
          },
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        // disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        // onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
        // Agenda theme
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
          backgroundColor: '#F8F8F8',
          calendarBackground: '#F8F8F8',
          selectedDayBackgroundColor: '#EF3D42',
        }}
      />
    </View>
  );
};

export default Calender;
