import { Image, Pressable, useColorMode,Text, Box, Center } from "native-base";
import React, { useState } from 'react';
import { useWindowDimensions ,StyleSheet,View} from "react-native"
import Carousel , { Pagination } from "react-native-snap-carousel";
import { Component } from "react/cjs/react.production.min";
import PlanetCarousel from "../json/PlanetCarousel.json";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

const PlanetImg = ({item}) => {
    const layout = useWindowDimensions();
    const { colorMode } = useColorMode();
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null)
    const renderItem = ({item }) => {
        return(
            <View
               backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}  >
                <Text style={styles.TextStyle}  color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} >{item.title}</Text>   
                <Image 
                    borderRadius={5}
                    w={550} h={587}
                    source={{uri:item.image }}
                    alt="CarouselImg"
                />
                
            </View>
           

        );
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



export default PlanetImg;