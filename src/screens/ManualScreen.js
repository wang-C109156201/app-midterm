import React from 'react';
import { Center, Text,Image } from "native-base";

const Manual = () => {
    return (
    <Center bg="gray" flex={1}>
        <Image 
            h={200} w={370}
            borderRadius={25}
            source={{uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Group%2014.png"}}
            alt='manualtopimg'
        />
        <Text fontSize={30}color={"black"}>
            Manual
        </Text>              
    </Center>
    );
}

export default Manual;