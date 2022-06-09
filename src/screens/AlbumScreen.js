import React from "react";
import { Box, useColorMode,VStack,HStack } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import { useWindowDimensions ,StyleSheet, Text, Dimensions, Image,View} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import Carousel , { Pagination } from "react-native-snap-carousel";
import HomeCarousel from "../json/HomeCarousel.json";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const AlbumScreen = ({ navigation }) => {
   const layout = useWindowDimensions();
   const { colorMode } = useColorMode();
   const [index, setIndex] = React.useState(0);
   const isCarousel = React.useRef(null);

   const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
        
        </View>
    )
    }
  return (
    <ScrollView backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
      <Text style={styles.TextStyle} bold >星文分享</Text>
      <Carousel
        // layout="tinder"
        // layoutCardOffset={9}
        // ref={isCarousel}
        data={HomeCarousel.data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // onSnapToItem={(index) => setIndex(index)}
        // useScrollView={true}
        loop={true}
      />
      {/* <Pagination
          dotsLength={HomeCarousel.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
      /> */}
        
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: ITEM_WIDTH,
    //paddingBottom: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom:20,
    marginTop:10,
    marginLeft:-38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 5,
    width: 350,
    height: 200,
    //marginBottom:20,
  },
  TextStyle: {
    marginTop:12,
    marginBottom:10,
    fontSize:27,
    marginLeft:30,
    lineHeight:40,
    fontWeight:"700",
    color:"#DAA520",
 },
})

export default AlbumScreen;
