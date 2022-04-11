import React from "react";
import { FlatList } from "native-base";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "#2B3A61" }}
    _light={{ bg: "#FFE7AB" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default AlbumList;

