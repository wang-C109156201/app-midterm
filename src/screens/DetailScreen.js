import React from 'react';
import {StyleSheet, Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";


const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    description,
    thumbnail_image
  } = route.params;
  return (
    <Center 
      flex={1} _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "white" }}
    >
      <ScrollView style={styles.bgcolorStyle}>
        <AspectRatio style={styles.imageboxStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: image }}
            alt='albumImage'
          />
        </AspectRatio>
        <Box shadow={1} _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }} padding="2" margin="2">
          <Center>
            <Heading pt={1} fontSize="2xl" color='#6099E4'>Discount Now!</Heading>
            <Heading fontSize="4xl">Price: ${price}</Heading>
          </Center>
          <Button 
            mt="4"
            onPress={() => Linking.openURL(url)}
          >
            Buy Now !
          </Button>   
        </Box>
        <Box shadow={1} _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }} padding="2" margin="2">
            <Text>
              <Text bold>Artist: </Text>
              {artist}
            </Text>
            <Text>            
              <Text bold>Title: </Text>
              {title}
            </Text>
            <Text mt='15' bold>Descriptions:</Text>
            <Text>{'\t'}{description}</Text>
        </Box>
      </ScrollView>      
    </Center>

  );
  
}
const styles = StyleSheet.create({
  bgcolorStyle:{
    backgroundColor:"#fff"
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
  imageboxStyle: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems: 'center',
    marginTop:10,
    backgroundColor: '#fff',
  
  }
});

export default DetailScreen;
