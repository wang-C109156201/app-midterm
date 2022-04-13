import React from 'react';
import {StyleSheet, Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button,Link } from "native-base";


const PlanetDetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    description,
    descriptiontwo,
    descriptionthree,
    thumbnail_image
  } = route.params;
  return (
    <Center 
      flex={1} _dark={{ bg: "#2B3A61" }}
      _light={{ bg: "#FFE7AB" }}
    >
      <ScrollView _dark={{ bg: "#2B3A61" }}
      _light={{ bg: "#FFE7AB" }}>
        
        <Link mt={4} href={url}>
        <AspectRatio style={styles.imageboxStyle} _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}>
          <Image
            source={{uri: image }}
            alt='albumImage'
            marginRight={10}
            marginLeft={4}
            borderRadius={10}
            width={400}
            height={250}
          />
        </AspectRatio>
        </Link>
        <Box shadow={1} _dark={{ bg: "#2B3A61", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "white" }} style={styles.Boxstyle} >
          <Text fontSize="xl" mt='15' ml='17' mr='17'bold color={'black'} >{'\t'}一、上課專心聽課，先理解再作筆記</Text>
          <Text fontSize="md" mt='15' ml='17' mr='17' color={'black'}>{'\t'}{description}</Text>
          <Text fontSize="xl" mt='15' ml='17' mr='17'bold color={'black'} >二、營造好的讀書環境</Text>
          <Text fontSize="md" mt='15' ml='17' mr='17' color={'black'}>{descriptiontwo}</Text>
          <Text fontSize="xl" mt='15' ml='17' mr='17'bold color={'black'} >三、休息是為了走更長遠的路</Text>
          <Text fontSize="md" mt='15' ml='17' mr='17' mb={10} color={'black'}>{'\t'}{descriptionthree}</Text>
        </Box>
      </ScrollView>      
    </Center>

  );
  
}
const styles = StyleSheet.create({
  bgcolorStyle:{
    backgroundColor:"#FFE7AB"
  },  
  imageStyle: {
    height: 100,
    width:100,
    flexDirection:"row",
    justifyContent:"center",
    marginTop:8,
    backgroundColor: '#FFE7AB',
    borderRadius:15,
  },
  imageboxStyle: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems: 'center',
    marginTop:10,
    marginBottom:0,
    height: 370,
    width:370,
  },
  Boxstyle:{
    backgroundColor:"white",
    borderRadius:25,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
  },
});

export default PlanetDetailScreen;
