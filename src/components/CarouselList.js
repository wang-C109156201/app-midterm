import React from "react";
import { FlatList, Text, Box } from "native-base";
import PlanetImg from "../screens/PlanetImgScreen";

const CarouselList = ({data, navigation}) => {
    const renderItem = ({item}) => (<PlanetImg Carousel={item} navigation={navigation}/>)
    return(
        <Box >
            <Text 
                ml={4} fontSize={18} letterSpacing={0.2}
                _dark={{color: "#E2E0E0"}} _light={{color: "#445B6C"}}
            >
                {data.title}
            </Text>
            <FlatList 
                contentContainerStyle={{paddingLeft: 16, marginTop: 16, marginBottom:26}}
                horizontal={true}
                data={data.list}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                showsHorizontalScrollIndicator={false}
            />
        </Box>
    );
};

export default CarouselList;