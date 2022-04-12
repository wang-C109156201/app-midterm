import React from 'react';
import { Box, Center, Switch, HStack, Text, useColorMode,Image } from 'native-base';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {StyleSheet, Linking } from 'react-native';

const DisplaySettingScreen = () => {
   const { colorMode, toggleColorMode} = useColorMode();

   return (
      
      <Box
         flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}
      >
         <Text style={styles.textStyle} bold  color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>探索設定</Text>
         <Center
            shadow={2} width="90%"
            mt="15" px="2" py="3" marginBottom={5} 
            _dark={{ bg: "#FFE7AB", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#2B3A61" }}
            borderRadius="25"
            alignSelf="center"
         >
            <HStack space={8} alignItems="center" >
               <Text fontSize="lg" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>{colorMode == "light" ? "學習提醒" : "學習提醒"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  colorScheme="amber"
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
            
         </Center>
         <Center
            shadow={2} width="90%"
            mt="2" px="2" py="3" marginBottom={5}
            _dark={{ bg: "#FFE7AB", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#2B3A61" }}
            borderRadius="25"
            alignSelf="center"
         >
            <HStack space={8} alignItems="center" >
               <Text fontSize="lg" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>{colorMode == "light" ? "複習提醒" : "複習提醒"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  colorScheme="amber"
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
            
         </Center>
         <Center
            shadow={2} width="90%"
            mt="2" px="2" py="3" marginBottom={5}
            _dark={{ bg: "#FFE7AB", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#2B3A61" }}
            borderRadius="25"
            alignSelf="center"
         >
            <HStack space={8} alignItems="center" >
               <Text fontSize="lg" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>{colorMode == "light" ? "休息提醒" : "休息提醒"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  colorScheme="amber"
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
            
         </Center>
         <Center
            shadow={2} width="90%"
            mt="2" px="2" py="3" marginBottom={5}
            _dark={{ bg: "#FFE7AB", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#2B3A61" }}
            borderRadius="25"
            alignSelf="center"
         >
            <HStack space={8} alignItems="center" >
               <Text fontSize="lg" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  colorScheme="amber"
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
         </Center>
         <Image
            style={styles.imageStyle}
            source={{uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2025.png" }}
            alt="Alternate Text"
          />
      </Box>
      
      
   );
};
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
      height: 370,
      width:270,
      flexDirection:"row",
      justifyContent:"center",
      marginTop:8,
      backgroundColor: '#fff',
      borderRadius:15,
    
    },
 });
 
export default DisplaySettingScreen;
