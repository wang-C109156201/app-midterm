import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlanetImg from './PlanetImgScreen';
import { Image, Pressable, useColorMode,Text, Box, Center } from "native-base";
import PlanetCarousel from "../json/PlanetCarousel.json";
const  PlanetImgfinal =({item})=> {
  const { colorMode } = useColorMode();
  return (
    <SafeAreaView style={styles.container} backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
        <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>{PlanetCarousel.title}</Text>
      <PlanetImg />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  TextStyle:{
    fontSize: 19,
    justifyContent: 'center', 
    alignItems: 'center',
    fontWeight:"700",
    marginTop:10,
},
});
export default PlanetImgfinal;