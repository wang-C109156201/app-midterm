import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, useColorMode } from "native-base"
import planetData from "../json/planet.json";

const PlanetScreenDetail = ({ planet, navigation }) => {
  const { colorMode } = useColorMode();
  return (
    
    <Box 
      marginX={10} marginBottom={5} borderRadius={20}  shadow={2}
      _dark={{ borderColor: '#2B3A61', borderWidth: 0.6 }}
      _light={{ borderColor: '#FFE7AB', borderWidth: 0.6 }}
    >
      <Box p={2} _dark={{ bg: "#FFE7AB" }}
        _light={{ bg: "#2B3A61" }}
        borderRadius={20}>
          
        <Pressable 
          onPress={() => navigation.navigate('Detail', planet)}
        >
          <HStack 
            _dark={{ bg: "#FFE7AB"}}
            _light={{ bg: "#2B3A61" }}
            borderRadius={20}>
            <AspectRatio w="60" ratio={1}>
              <Image
                margin="0.5"
                source={{ uri: planet.image }}
                borderRadius={10}
                width="75"
                alt="artist"
              />
            </AspectRatio>
            <VStack paddingLeft={25} justifyContent="space-around">
              <Text color={colorMode == "light" ? "white" : "#2B3A61"} fontSize="lg">{planet.title}</Text>
              <Text color={colorMode == "light" ? "white" : "#2B3A61"} fontSize="sm">{planet.artist}</Text>
            </VStack>
          </HStack>
          
        </Pressable>
      </Box>   
    </Box>
  )};

export default PlanetScreenDetail;
