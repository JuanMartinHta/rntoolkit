import './i18n';

import React from 'react';
import { Provider } from 'react-redux';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';
import RootNavigator from './routes/RootNavigator';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <RootNavigator />
      </KeyboardAvoidingView>
    </PersistGate>
  </Provider>
);

export default App;
