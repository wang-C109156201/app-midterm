import { Center, Text, useColorMode,Box,Image  } from "native-base";
import React, { useState } from 'react';
import { StyleSheet,TouchableOpacity, ScrollView } from "react-native";

const PlanetSociety = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();

   return (
      <Center flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}>
            <Text fontSize={30} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} >
                Society
            </Text> 
         
      </Center>
   );
}

const styles = StyleSheet.create({ 
    TextStyle:{
        fontSize: 18,
        marginLeft:30, 
        marginTop:7,
    },
    imageleftStyle: {
       height: 182,
       width:190,
       borderRadius:15,
       marginLeft:15,
       marginTop:20,
    },
    imagerightStyle: {
        height: 182,
        width:190,
        borderRadius:15,
        marginLeft:20,
        marginTop:20,
    }, 
    rowStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
  });
export default PlanetSociety;