import React from 'react';
import {StyleSheet, Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button,Link, useColorMode } from "native-base";

const Planet = ({ navigation }) => {
    const { colorMode, toggleColorMode} = useColorMode();
    return (
    <ScrollView bg="gray" flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}>
         <Text style={styles.textStyle} bold  color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>進入星球</Text> 
        <Center 
            flex={1} _dark={{ bg: "#2B3A61" }}
            _light={{ bg: "#FFE7AB" }}
        >
        
        <Box style={styles.rowStyle}  >
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E5%9C%8B%E6%96%87.png" }}
                style={styles.imageleftStyle}
                alt="chinese"
            />
            
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E8%8B%B1%E6%96%87.png" }}
                    style={styles.imagerightStyle}
                    alt="english"
                />
            
        </Box>
        <Box style={styles.rowStyle} >
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/math.png" }}
                style={styles.imageleftStyle}
                alt="math"

            />
           
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E8%87%AA%E7%84%B6.png" }}
                    style={styles.imagerightStyle}
                    alt="physical"
                />
            
        </Box>
    </Center>    
        <Box  >
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E7%A4%BE%E6%9C%83.png" }}
                style={styles.imageleftoneStyle}
                alt="social"
            />
        </Box> 
    
        <Image
            source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/planet%20b%201.png" }}
            style={styles.astronautimageStyle}
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
    bgimageStyle: {
        backgroundColor:"black",
        height: 140,
        width:160,
     },
    imageleftStyle: {
       height: 140,
       width:160,
       borderRadius:15,
       marginLeft:0,
       marginTop:30,
    },
    imageleftoneStyle: {
        height: 140,
        width:160,
        borderRadius:15,
        marginLeft:45,
        marginTop:30,
     },
    imagerightStyle: {
        height: 140,
        width:150,
        borderRadius:15,
        marginLeft:20,
        marginTop:35,
    },
    astronautimageStyle: {
        height: 300,
        width:200,
        marginLeft:230,
        marginTop:-120,
     },
    rowStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
  });
export default Planet;