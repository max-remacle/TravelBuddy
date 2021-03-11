import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useStateWithCallback from 'use-state-with-callback'

import {getCityName, getWikiSection} from '../api'

const GeoLoc= () => {

  const [location,setLocation] = useStateWithCallback(null, location =>{
    if(location !=null){
      getCityName(location)
      .then(data =>{
        setCity(data.results[0].locality)
      })
      .catch(err => console.log(err.message))
    }
  })
  const [city,setCity] = useStateWithCallback(null, city =>{
    if(city != null){
      getWikiSection(city)
        .then(data => console.log(data.parse.sections[0]))
        .catch(err => console.log(err.message))
    }
  })
  
  
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const lat = coords.latitude
        const long = coords.longitude
        setLocation(`${lat}, ${long}`)
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 2 }
    );
    console.log("test");
  },[])


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

export default GeoLoc
