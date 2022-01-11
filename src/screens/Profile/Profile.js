import React, {useEffect} from 'react';
import {ScrollView, View, Text, Image, LogBox} from 'react-native';
import RoundedHeader from '../../components/RoundedHeader/RoundedHeader';

import Style from './Style';

const Profile = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <View>
      <RoundedHeader headerTitle="الملف الشخصي" />
    </View>
  );
};

export default Profile;
