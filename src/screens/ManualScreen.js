import React from 'react';
import { Center, Text,Image,ScrollView,Box, useColorMode } from "native-base";
import { StyleSheet } from "react-native";

const Manual = () => {
    const { colorMode} = useColorMode();
    return (
    <ScrollView _dark={{ bg: "#2B3A61" }}
        _light={{ bg: "#FFE7AB" }}>
        <Text fontSize={25} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} left={5} bold>
            探索說明書
        </Text>     
        <Center bg="gray" flex={1}>
            <Box>
                <Image 
                    style={styles.imageoneStyle}
                    source={{uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2014.png"}}
                    alt='manualtopimg'
                />
            </Box>
            <Box>
                <Image 
                   style={styles.imagetwoStyle}
                    source={{uri: colorMode=="light"?"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2015.png":"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2020dark.png"}}
                    alt='manualimg'
                />   
            </Box>
            <Image 
                style={styles.imagethreeStyle}
                source={{uri:colorMode=="light"? "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2016.png":"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2016dark.png"}}
                alt='manualimg'
            />          
            <Image 
                style={styles.imagefourStyle}
                source={{uri: colorMode=="light"?"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2017.png":"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2017dark.png"}}
                alt='manualimg'
            />
            <Image 
                style={styles.imagefiveStyle}
                source={{uri: colorMode=="light"?"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2018%20light.png":"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2018%20(1)dark.png"}}
                alt='manualimg5'
            />
            <Image 
                style={styles.imagesixStyle}
                source={{uri: colorMode=="light"?"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2019.png":"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2019dark.png"}}
                alt='manualimg'
            />
        </Center>
    </ScrollView>      
    );
}
const styles = StyleSheet.create({ 
    imageoneStyle: {
      height: 190,
      width:370,
      justifyContent:"center",
      borderRadius:25,
      marginTop:10,
    },
    imagetwoStyle: {
        height: 400,
        width:370,
        justifyContent:"center",
        borderRadius:25,
        marginBottom:10,
    },
    imagethreeStyle: {
        height: 390,
        width:370,
        justifyContent:"center",
        borderRadius:25,
        marginBottom:10,
    },
    imagefourStyle: {
        height: 480,
        width:370,
        justifyContent:"center",
        borderRadius:25,
    },
    imagefiveStyle: {
        height: 780,
        width:370,
        justifyContent:"center",
        borderRadius:25,
    },
    imagesixStyle: {
        height: 840,
        width:375,
        justifyContent:"center",
        borderRadius:25,
        marginTop:20,
        marginBottom:20,
    },
  });
export default Manual;