import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GeoLoc from "./components/GeoLoc"

export default function App() {

  return (
    <View style={styles.container}>
      <GeoLoc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
