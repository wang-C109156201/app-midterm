import {  Pressable, useColorMode,View } from "native-base";
import React, { useState } from 'react';
import { useWindowDimensions ,StyleSheet, Text, Dimensions, Image} from "react-native";
import Carousel , { Pagination } from "react-native-snap-carousel";
import { Component } from "react/cjs/react.production.min";
import PlanetCarousel from "../json/PlanetCarousel.json";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const PlanetImg = ({item}) => {
    const layout = useWindowDimensions();
    const { colorMode } = useColorMode();
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
        {/* <Text style={styles.TextStyle}>{item.title}</Text> */}
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
        
        </View>
    )
    }
    return (
        <View backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} >
            <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={PlanetCarousel.data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={PlanetCarousel.data.length}
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
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      width: ITEM_WIDTH,
      paddingBottom: 50,
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      // marginLeft:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 410,
      height: 600,
      marginTop:20,
    },
    TextStyle: {
      fontSize:25,
    }
  })


export default PlanetImg;