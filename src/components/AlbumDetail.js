import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box 
      marginX={1} marginBottom={2} borderRadius={3} shadow={2}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
    >
      
      <Box p={1} _dark={{ bg: "#2B3A61" }}
        _light={{ bg: "white" }}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <HStack 
            _dark={{ bg: "#2B3A61"}}
            _light={{ bg: "white" }}>
            <AspectRatio w="50" ratio={1}>
              <Image
                margin="1"
                source={{ uri: album.thumbnail_image }}
                alt="artist"
              />
            </AspectRatio>
            <VStack paddingLeft={2} justifyContent="space-around">
              <Text>{album.title}</Text>
              <Text>{album.artist}</Text>
            </VStack>
          </HStack>
          
        </Pressable>
      </Box>   
    </Box>
  )};

export default AlbumDetail;
