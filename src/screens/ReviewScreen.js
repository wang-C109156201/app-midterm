import React from 'react';
import { StyleSheet, Image,Button, Alert  } from "react-native";
import { NativeBaseProvider, ScrollView,Center,Box,useColorMode,Text} from 'native-base';


const Review = () => {
    const { colorMode, toggleColorMode} = useColorMode();
    return (
        <ScrollView  flex={1}
            _dark={{ bg: "#2B3A61" }}
            _light={{ bg: "#FFE7AB" }} >
            <Center backgroundColor={colorMode == "light"? "#FFE7AB":"#2B3A61"}  w={400} h={70}>
                <Text style={styles.textStyle} color={colorMode=="light"?"#2B3A61":"#FFE7AB"}>待複習星知</Text> 
            </Center>
            <Center>
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2029.png" }}
                style={styles.image}
            />
            <Text style={styles.titleStyle}color={colorMode=="light"?"#2B3A61":"#FFE7AB"} >三民英文(二)L8單字</Text> 
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2030.png" }}
                style={styles.image}
            />
            <Text style={styles.titleStyle} color={colorMode=="light"?"#2B3A61":"#FFE7AB"}>高中數學 函數概念</Text> 
            <Image
                source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2028.png" }}
                style={styles.imagelest}
            />
            <Text style={styles.titleStyle}color={colorMode=="light"?"#2B3A61":"#FFE7AB"} >高中化學 有機化合物</Text> 
            </Center>
            
        </ScrollView>
        );
}
const styles = StyleSheet.create({ 
    textStyle: {
       marginTop:32,
       marginBottom:0,
       fontSize:19,
       fontWeight:"700",
       marginLeft:30,
    },
    ButtonStyle:{
        marginLeft:110,
        height:10,
    },
    titleStyle: {
        marginTop:5,
        marginBottom:10,
        fontSize:18,
        marginLeft:30,
        lineHeight:40,
     },
    image:{
        marginBottom:2,
        width:390,
        height:270,
        borderRadius:15,
    },
    imagelest:{
        marginBottom:2,
        width:390,
        height:150,
        borderRadius:15,
    }
  });
export default Review;