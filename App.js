import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={appStyles.container}>
     <HomeScreen/>
      <StatusBar style="auto" />
    </View>
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
