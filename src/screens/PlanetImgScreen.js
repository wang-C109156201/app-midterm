import { Image, Pressable } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native"
import Carousel from "react-native-snap-carousel";
import { Component } from "react/cjs/react.production.min";
import PlanetCarousel from "../json/PlanetCarousel.json";


const PlanetImg = ({data}) => {
    const layout = useWindowDimensions();
    const renderItem = ({PlanetCarousel}) => {
        return(
            <Image 
                borderRadius={5}
                w={250} h={370}
                source={{uri:PlanetCarousel.Image }}
                alt="CarouselImg"
            />
        );
    }
    return (
        <Carousel 
            data={data}
            renderItem={renderItem}
            sliderWidth={layout.width}
            itemWidth={250}
            loop={true}
        />
    );
}


export default PlanetImg;