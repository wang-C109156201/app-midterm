import React,{useState} from 'react';
import { Pressable } from "native-base";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator , DrawerContentScrollView, DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'native-base';
import { extendTheme, useColorMode } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, TouchableOpacity } from "react-native";

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UploadScreen from '../screens/UploadScreen';
import PlanetScreen from '../screens/PlanetScreen';
import SignupScreen from '../screens/SignupScreen';
import ManualScreen from '../screens/ManualScreen';
import ReviewScreen from '../screens/ReviewScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "light",
// };

// // extend the theme
// export const theme = extendTheme({ config });

const Navigation = () => {
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer theme={MyTheme} >
       <MyDrawer/>
      <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "#FFE7AB" : "#2B3A61"
        }
      />
    </NavigationContainer>
  );
}

const MyDrawer = () => {
  const { colorMode } = useColorMode();
  return (
    <Drawer.Navigator initialRouteName="HomeStack"  
        useLegacyImplementation
        screenOptions={{
          drawerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          drawerActiveTintColor:colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
        }}>
      <Drawer.Screen 
        name="HomeStack" 
        component={MyTabs} 
        
        options={{
          headerShown: false,
          title: "登入",
          
          drawerIcon: ({color}) => (
            <FontAwesome5 name="user-astronaut" color={color} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "探索設定",
          drawerIcon: ({color}) => (
            <Ionicons name="md-settings-outline" color={color} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Review" 
        component={ReviewScreen} 
        options={{
          headerShown: false,
          title: "待複習星知",
          
          drawerIcon: ({color}) => (
            <FontAwesome5 name="star" color={color} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="ExploreManual" 
        component={ManualScreen} 
        options={{
          headerShown: false,
          title: "探索說明書",
          drawerIcon: ({color}) => (
            <AntDesign name="book" color={color} size={20} />
          ),
        }}
      />
    </Drawer.Navigator>
  );  
}

const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInActiveTintColor: colorMode == 'light' ? '#FFFFFF' : '#2B3A61',
        tabBarActiveTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB' },
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          fontSize:"25",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color}  size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="planet-outline"
        component={PlanetScreen}
        options={{
          headerShown: false,
          title: "Planet",
          tabBarIcon: ({color}) => (
            <Ionicons name="planet-outline" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          headerShown: false,
          title: "uplode",
          tabBarIcon: ({color}) => (
            <Ionicons name="cloud-upload-outline" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({navigation}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTintColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          
          headerTitleStyle: {
            color: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
                size={30}
                style={{marginRight: 20}}
                onPress={() => { navigation.goBack();}}
            />
            </Pressable>
              ),
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: albumData.albumTitle,
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={colorMode == 'light' ? '#2B3A61' : '#FFE7AB'} 
                size={30}
                style={{marginRight: 20}}
                onPress={ () => {navigation.goBack();}}
            />
            </Pressable>
            ),
            headerRight:() =>(
              <TouchableOpacity onPress={() => toggleFunction()}>
                          <Text>{toggle ? <MaterialCommunityIcons name={'heart-outline'} color={colorMode == 'light' ? 'black' : '#FFE7AB'} size={25} />:
                                          <MaterialCommunityIcons name={'heart'} color={'red'} size={25} />}
                          </Text>
                      </TouchableOpacity>
            )
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;