import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/ConfigureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
const { persistor, store } = ConfigureStore();
export default function App() {
  return (
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <Main />
        {/* </PersistGate> */}
      </Provider>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
