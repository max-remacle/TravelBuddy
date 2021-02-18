import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 10000 }
    );
  },[])

  return (
    <View style={styles.container}>
      <Text>ITS WORKING!!</Text>
      <StatusBar style="auto" />
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
