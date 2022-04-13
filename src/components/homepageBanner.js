import React from "react";
import { Box, useColorMode } from "native-base";
import { Text, StyleSheet ,Image,View,SafeAreaView,FlatList } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import BetterBanner from 'react-native-better-banner';

const homepageBanner = ({ navigation }) => {
  const { colorMode } = useColorMode();
  return (
        <Box  backgroundColor={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
        <View style={styles.container}>
            <BetterBanner
                bannerImages={[
                    {uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2025.png"},
                    {uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%201.png"},
                    {uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%203.png"},
                    {uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2025.png"},
                ]}
                onPress={(index) => alert('you pressed index is : ' + index)}
                isSeamlessScroll={true}
                indicatorGroupPosition={'center'}
                adaptSeamlessScrollValue={false}
            />
        </View>
        </Box>    
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
export default homepageBanner;