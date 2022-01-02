import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';

/* Root navigation */
import AppNavigation from './src/navigation/navigation';

/* Root Store */
import {store} from './src/redux/storeConfig';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
