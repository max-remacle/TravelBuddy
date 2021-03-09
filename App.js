import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {getCityName} from './api'

export default function App() {

  const[location,setLocation] = useState(null)
  const [city,setCity] = useState(null)
  
  
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const lat = coords.latitude
        const long = coords.longitude
        setLocation(`${lat}, ${long}`)
        console.log(location);
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 2 }
    );
    if(location != null){
      getCityName(location)
      .then(data =>{
        setCity(data.results[0].locality)
      })
      .catch(err => console.log(err.message))
    }
  },[location])



  return (
    <View style={styles.container}>
      <Text>{city}</Text>
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
