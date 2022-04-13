import React from "react";
import { Box, useColorMode,Image,VStack,HStack } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import { Text, StyleSheet ,View,SafeAreaView,FlatList } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import BetterBanner from 'react-native-better-banner';

import homepageBanner from "../components/homepageBanner";

const AlbumScreen = ({ navigation }) => {
   const { colorMode, toggleColorMode} = useColorMode();
  
  return (
    <ScrollView backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
      <Text color={colorMode == "light" ? '#2B3A61' : 'white'}  style={styles.textStyle} >星文分享</Text>
      <VStack ml={8} mb={10}   space={14}>
            <Image 
                h={200} w={370}
                borderRadius={25}
                source={{uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%201.png"}}
                alt='avatar'
            />
            </VStack>
        
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({ 
  container: {
    flex: 1
  },
  textStyle: {
    marginTop:10,
    marginBottom:10,
    fontSize:27,
    marginLeft:30,
    lineHeight:40,
    fontWeight:"700",
  },
  imageStyle: {
    height: 200,
    width:400,
    justifyContent:"center",
    borderRadius:15,
    marginLeft:17,
  },
});
export default AlbumScreen;
