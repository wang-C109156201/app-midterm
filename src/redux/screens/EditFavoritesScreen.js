import { NativeBaseProvider, Center, HStack, Button, Text,useColorMode, Box } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { increaseOne,decreaseOne } from "../accounterSlice";
import { selectCounter } from "../accounterSlice";
import {StyleSheet, ScrollView ,TouchableOpacity,Image } from 'react-native';
import PlanetCarousel from "../../json/PlanetCarousel.json";
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Then, you can use the redux state management:
// get states by useSelector
// send actions by useDispatch
const HomeScreen = () => {
   // Get states from store
   const counterValue = useSelector(selectCounter);

   // Define a dispatch to send actions
   const dispatch = useDispatch();
   const { colorMode } = useColorMode();
   const [index, setIndex] = React.useState(0);
   return (
      <ScrollView flex={1} backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
        <Text style={styles.textStyle} bold  color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>待複習星知</Text>
        {/* <Box style={styles.container} key={index}>
          <Image
              source={{ uri: PlanetCarousel.data.image }}
              style={styles.image}
          />
          <Text style={styles.TextStyle}>{PlanetCarousel.title}</Text>
          </Box> */}
          <HStack space={20}>
            <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOne(counterValue + 1))}>
              <Text fontSize={40} color="white">+</Text>
            </Button>
            <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOne(counterValue - 1))}>
              <AntDesign name="delete" color={'white'} size={20} />
            </Button>
          </HStack>
          <Text fontSize={40} mt={20} color={"black"}>
            {counterValue}
          </Text>
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
      height: 80,
      width:200,
      marginLeft:230,
      marginTop:-50,
   },
  imageleftStyle: {
     height: 140,
     width:160,
     borderRadius:15,
     marginLeft:0,
     marginTop:20,
  },
  
});

export default HomeScreen;