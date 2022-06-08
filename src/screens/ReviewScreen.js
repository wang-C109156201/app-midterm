import React from 'react';
import { Text,StyleSheet } from "react-native";
import { NativeBaseProvider, ScrollView, Box,useColorMode } from 'native-base';


const Review = () => {
    const { colorMode, toggleColorMode} = useColorMode();
    return (
        <ScrollView  flex={1}
            _dark={{ bg: "#2B3A61" }}
            _light={{ bg: "#FFE7AB" }}>
            <Text style={styles.textStyle} bold  color={colorMode == "light"? "#2B3A61" :"#FFE7AB"}>待複習星知</Text> 
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
  });
export default Review;