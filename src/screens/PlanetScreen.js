import React from 'react';
import {StyleSheet, Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button,Link } from "native-base";
import planetData from "../json/planet.json";

const Planet = () => {
    return (
    <ScrollView bg="gray" flex={1}>
        <Text fontSize={30}>
            進入星球
        </Text>  

        <Image
            source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/planet%20b%201.png" }}
            style={styles.imageStyle}
            alt="artist"
        />          
    </ScrollView>
    );
}
const styles = StyleSheet.create({ 
    textStyle: {
       marginTop:22,
       marginBottom:10,
       fontSize:27,
       marginLeft:30,
       lineHeight:40,
       fontWeight:"700",
    },
    imageStyle: {
       height: 150,
       width:130,
       borderRadius:15,
       marginLeft:17,
     },
  });
export default Planet;