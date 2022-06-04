import { Center, Text, useColorMode,Box,Image  } from "native-base";
import SegmentedControlTab from "react-native-segmented-control-tab";
import React, { useState } from 'react';
import { StyleSheet,TouchableOpacity } from "react-native";

const PlanetDetail = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();
   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <Center flex={1}
               _dark={{ bg: "#2B3A61" }}
               _light={{ bg: "#FFE7AB" }}>
               <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/3.png" }}
                        style={styles.imageleftStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/4.png" }}
                        style={styles.imagerightStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/5.png" }}
                        style={styles.imageleftStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E5%9C%8B%E6%96%87.png" }}
                        style={styles.imagerightStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E5%9C%8B%E6%96%87.png" }}
                        style={styles.imageleftStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation. navigate ( 'PlanetDetail' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/%E5%9C%8B%E6%96%87.png" }}
                        style={styles.imagerightStyle}
                        alt="chinese"
                    />
                    <Text>單字gggg</Text>
                    </TouchableOpacity>
                </Box>
            </Center>
         )
      } else {
         return (
            <Center flex={1}
               _dark={{ bg: "#2B3A61" }}
               _light={{ bg: "#FFE7AB" }}>
               <Text>片語</Text>
            </Center>
         )
      }
   }

   return (
      <Box flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}>

         <SegmentedControlTab
            values={["片語", "單字"]}
            tabStyle={{ 
               marginTop: 10, borderColor: colorMode == "light" ? "#2B3A61" : "#FFE7AB", 
               borderWidth: colorMode=="light"? 1: 4,
               backgroundColor: colorMode == "light" ? "#FFE7AB" : "#2B3A61" 
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 16, padding: 5, color: colorMode == "light" ? "#2B3A61" : "#FFE7AB", }}
            activeTabStyle={{ backgroundColor: colorMode == "light" ? "#2B3A61" : "#FFE7AB" }}
            activeTabTextStyle={{ color: colorMode == "light" ? "#FFE7AB" : "#2B3A61", }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </Box>
   );
}

const styles = StyleSheet.create({ 
    imageleftStyle: {
       height: 140,
       width:160,
       borderRadius:15,
       marginLeft:0,
       marginTop:20,
    },
    imageleftoneStyle: {
        height: 140,
        width:160,
        borderRadius:15,
        marginLeft:45,
        marginTop:20,
     },
    imagerightStyle: {
        height: 140,
        width:150,
        borderRadius:15,
        marginLeft:20,
        marginTop:20,
    }, 
    rowStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
  });
export default PlanetDetail;