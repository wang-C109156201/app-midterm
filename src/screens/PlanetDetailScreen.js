import { Center, Text, useColorMode,Box,Image  } from "native-base";
import SegmentedControlTab from "react-native-segmented-control-tab";
import React, { useState } from 'react';
import { StyleSheet,TouchableOpacity, ScrollView } from "react-native";

const PlanetDetail = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();
   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <ScrollView flex={1}
               _dark={{ bg: "#2B3A61" }}
               _light={{ bg: "#FFE7AB" }}>
               <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2019.png" }}
                        style={styles.imageleftStyle}
                        alt="三民英文(一)L12片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} >三民英文(一)L12片語</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2020.png" }}
                        style={styles.imagerightStyle}
                        alt="三民英文(二)L2片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(二)L2片語</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2021.png" }}
                        style={styles.imageleftStyle}
                        alt="三民英文(三)L6單字"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(三)L6單字</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2022.png" }}
                        style={styles.imagerightStyle}
                        alt="三民英文(四)L11片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(四)L11片語</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2023.png" }}
                        style={styles.imageleftStyle}
                        alt="三民英文(五)L8片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(五)L8片語</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2024.png" }}
                        style={styles.imagerightStyle}
                        alt="三民英文(五)L9片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(五)L9片語</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.rowStyle} >
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2027.png" }}
                        style={styles.imageleftStyle}
                        alt="三民英文(六)L2片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(六)L2片語</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2026.png" }}
                        style={styles.imagerightStyle}
                        alt="三民英文(六)L4片語"
                    />
                    <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(六)L4片語</Text>
                    </TouchableOpacity>
                </Box>
            </ScrollView>
         )
      } else {
         return (
            <ScrollView flex={1}
            _dark={{ bg: "#2B3A61" }}
            _light={{ bg: "#FFE7AB" }}>
            <Box style={styles.rowStyle} >
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2018.png" }}
                     style={styles.imageleftStyle}
                     alt="三民英文(二)L8單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} >三民英文(二)L8單字</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%204.png" }}
                     style={styles.imagerightStyle}
                     alt="三民英文(三)L5單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(二)L5單字</Text>
                 </TouchableOpacity>
             </Box>
             <Box style={styles.rowStyle} >
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%205.png" }}
                     style={styles.imageleftStyle}
                     alt="三民英文(四)L2單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(四)L2單字</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%203-1.png" }}
                     style={styles.imagerightStyle}
                     alt="三民英文(五)L7單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(五)L7單字</Text>
                 </TouchableOpacity>
             </Box>
             <Box style={styles.rowStyle} >
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2015.png" }}
                     style={styles.imageleftStyle}
                     alt="三民英文(一)L7單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(一)L7單字</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2016.png" }}
                     style={styles.imagerightStyle}
                     alt="三民英文(二)L10單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(二)L10單字</Text>
                 </TouchableOpacity>
             </Box>
             <Box style={styles.rowStyle} >
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2015.png" }}
                     style={styles.imageleftStyle}
                     alt="三民英文(四)L6單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(四)L6單字</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate ( 'PlanetImg' )}>
                 <Image
                     source={{ uri: "https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/Rectangle%2016.png" }}
                     style={styles.imagerightStyle}
                     alt="三民英文(五)L4單字"
                 />
                 <Text style={styles.TextStyle} color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"}>三民英文(五)L4單字</Text>
                 </TouchableOpacity>
             </Box>
            </ScrollView>
            
         )
      }
   }

   return (
      <Box flex={1}
         _dark={{ bg: "#2B3A61" }}
         _light={{ bg: "#FFE7AB" }}>

         <SegmentedControlTab
            values={["單字", "片語"]}
            tabStyle={{ 
               marginTop: 10, borderColor: colorMode == "light" ? "#2B3A61" : "#FFE7AB", 
               borderWidth: colorMode=="light"? 1: 4,
               backgroundColor: colorMode == "light" ? "#FFE7AB" : "#2B3A61" 
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 18, padding: 5, color: colorMode == "light" ? "#2B3A61" : "#FFE7AB", }}
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
    TextStyle:{
        fontSize: 18,
        marginLeft:30, 
    },
    imageleftStyle: {
       height: 197,
       width:180,
       borderRadius:15,
       marginLeft:20,
       marginTop:20,
    },
    imagerightStyle: {
        height: 197,
        width:180,
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