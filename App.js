import 'react-native-gesture-handler';
import React from 'react';
import {I18nManager} from 'react-native';

import {Provider} from 'react-redux';

/* Root navigation */
import AppNavigation from './src/navigation/navigation';

/* Root Store */
import {store} from './src/redux/storeConfig';

export default function App() {
  I18nManager.forceRTL(true);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
