/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  I18nManager,
  LogBox,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
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
 * Style
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

      <Calendar
        markingType={'custom'}
        style={Style.calendarView}
        theme={{
          textMonthFontSize: 0,
          monthTextColor: Colors.white,
          calendarBackground: Colors.whiteLight,
        }}
        hideArrows={true}
        markedDates={{
          '2022-01-01': {
            selected: true,
            today: true,
            customContainerStyle: {
              backgroundColor: 'black',
            },
            customStyles: {
              container: {
                backgroundColor: '#EF3D42',
                borderRadius: 3,
                shadowOffset: {width: 5, height: 6},
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 10,
                shadowColor: '#FF003166',
              },
              text: {
                color: 'white',
              },
            },
          },
          '2022-01-31': {marked: true, activeOpacity: 0},
          '2022-01-15': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2022-01-20': {
            marked: true,
            dotColor: '#FFA700',
            activeOpacity: 0,
          },
        }}
      />

      <ScrollView style={Style.calendarEvents}>
        <View>
          <CalendarEventItem borderBottomColor="#EB454A" />
          <CalendarEventItem borderBottomColor="#FFA700" />
          <CalendarEventItem borderBottomColor="#B100FF" />
          <CalendarEventItem borderBottomColor="#A39161" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Calender;
