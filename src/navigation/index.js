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

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UploadScreen from '../screens/UplodeScreen';
import PlanetScreen from '../screens/PlanetScreen';
import SignupScreen from '../screens/SignupScreen';
import ManualScreen from '../screens/ManualScreen';
import ReviewScreen from '../screens/ReviewScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";

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

const MyDrawer = ({colorMode}) => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack"  
        useLegacyImplementation
        screenOptions={{
          drawerStyle: {
            backgroundColor: "light" ? "#FFE7AB" : "#2B3A61"
          },
        }}>
      <Drawer.Screen 
        name="HomeStack" 
        component={MyTabs} 
        
        options={{
          headerShown: false,
          title: "登入",
          
          drawerIcon: ({ colorMode }) => (
            <FontAwesome5 name="user-astronaut" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "探索設定",
          drawerIcon: ({ colorMode }) => (
            <Ionicons name="md-settings-outline" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Review" 
        component={ReviewScreen} 
        options={{
          headerShown: false,
          title: "待複習星知",
          
          drawerIcon: ({ colorMode }) => (
            <FontAwesome5 name="star" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} size={20} />
          ),
        }}
      />
      <Drawer.Screen 
        name="ExploreManual" 
        component={ManualScreen} 
        options={{
          headerShown: false,
          title: "探索說明書",
          drawerIcon: ({ colorMode }) => (
            <AntDesign name="book" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} size={20} />
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
        tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
        tabBarActiveTintColor: colorMode == 'light' ? colors.primary700 : 'white',
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
          tabBarIcon: ({ colorMode }) => (
            <MaterialCommunityIcons name="home" color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="planet-outline"
        component={PlanetScreen}
        options={{
          headerShown: false,
          title: "Planet",
          tabBarIcon: ({ colorMode }) => (
            <Ionicons name="planet-outline" color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          headerShown: false,
          title: "uplode",
          tabBarIcon: ({ colorMode }) => (
            <Ionicons name="cloud-upload-outline" color={colorMode == "light" ? "#2B3A61" : "#FFE7AB"} size={26} />
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
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  const { colorMode } = useColorMode();

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
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;