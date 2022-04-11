import React from 'react';
import { Box, Center, Switch, HStack, Text, useColorMode } from 'native-base';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DisplaySettingScreen = () => {
   const { colorMode, toggleColorMode} = useColorMode();

   return (
      <Box
         flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}
      >
         <Center
            shadow={2} width="90%"
            mt="2" px="2" py="4"
            _dark={{ bg: "#FFE7AB", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#2B3A61" }}
            borderRadius="md"
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
      </Box>

   );
};

export default DisplaySettingScreen;
