import React from 'react';
import {StyleSheet, Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button,Link } from "native-base";
import PlanetList from "../components/PlanetList";
import planetData from "../json/planet.json";

const Planet = ({ navigation }) => {
    return (
    <ScrollView bg="gray" flex={1}>
        <Text fontSize={30}>
            進入星球
        </Text>  
        <Box style={styles.rowStyle}  bg="amber.500">
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E5%9C%8B%E6%96%87.png" }}
                style={styles.imageStyle}
                alt="chinese"
            />
            
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E8%8B%B1%E6%96%87.png" }}
                    style={styles.imageStyle}
                    alt="english"
                />
            
        </Box>
        <Box style={styles.rowStyle} bg="amber.500">
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E6%95%B8%E5%AD%B8.png" }}
                style={styles.mathimageStyle}
                alt="math"

            />
           
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E8%87%AA%E7%84%B6.png" }}
                    style={styles.imageStyle}
                    alt="physical"
                />
            
        </Box>
        <Box  bg="amber.500">
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E7%A4%BE%E6%9C%83.png" }}
                style={styles.imageStyle}
                alt="social"
            />
        </Box>          
        <PlanetList
            list={planetData.planetList}
            navigation={navigation}
         />
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
       width:150,
       borderRadius:15,
       marginLeft:17,
    },
    mathimageStyle: {
        height: 170,
        width:170,
        borderRadius:15,
        marginLeft:17,
    }, 
    rowStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
  });
export default Planet;