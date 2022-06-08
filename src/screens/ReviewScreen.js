import React from 'react';
import { Provider } from 'react-redux';
import Screen  from '../redux/screens/EditFavoritesScreen';
import store from '../redux/store';
import { Text, StyleSheet, FlatList, View, HStack, VStack, Pressable, AspectRatio, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ReviewDetail from "./ReviewDetailScreen";

const Review = ({ navigation }) => {
    const Review = useSelector((state) => state.reviewnote.Review);
    const renderItem = ({ item }) => <ReviewDetail popularBike={item} navigation={navigation} />;
    return (
        <Provider store={store}>
            <FlatList
            data={Review}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </Provider>
        
    );
}

export default Review;