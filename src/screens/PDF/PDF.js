import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  I18nManager,
  LogBox,
} from 'react-native';
import FileViewer from 'react-native-file-viewer';
import {useTranslation} from 'react-i18next';

/**
 * Icon
 */
import BackIcon from 'react-native-vector-icons/Ionicons';

/**
 * Style
 */
import Style from './Style';

const PDF = () => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    LogBox.ignoreAllLogs();
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const url =
  //   'https://github.com/vinzscam/react-native-file-viewer/raw/master/docs/react-native-file-viewer-certificate.pdf';

  const openFile = () => {
    FileViewer.open(
      'file:///storage/emulated/0/Download/react-native-file-viewer-certificate.pdf',
    )
      .then(res => console.log('res', res))
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={Style.screen}>
      <ImageBackground
        style={Style.img}
        resizeMode="cover"
        source={require('../../../assets/img_new_header.png')}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Style.headerImg}>
          {/* back button */}
          <TouchableOpacity style={Style.back}>
            <BackIcon name="chevron-back" color="white" size={20} />
            <Text style={Style.backText}>{t('العوده')}</Text>
          </TouchableOpacity>

          {/* header title */}
          <View style={Style.headerTitleContainer}>
            <Text style={Style.headerTitle}>تعميم رقم 1</Text>
            <Text style={Style.headerTitle}>سنة التعميم 2020</Text>
          </View>
        </View>

        <View style={Style.content}>
          <TouchableOpacity
            onPress={() => {
              openFile();
            }}>
            <Image
              style={Style.pdfImg}
              source={require('../../../assets/pdf.jpg')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PDF;
