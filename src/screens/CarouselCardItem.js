import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: ITEM_WIDTH,
    paddingBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
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
  },
  TextStyle: {
    fontSize:25,
  }
})

export default CarouselCardItem