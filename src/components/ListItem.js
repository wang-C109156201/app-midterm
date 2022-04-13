import React from "react";
import { Text, HStack, Pressable , useColorMode} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

const ListItem = ({ title, navigation, destination }) => {
  const { colorMode} = useColorMode();
  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      <HStack
        _dark={{
          bg: "#2B3A61",
          borderColor: "#FFE7AB",
          borderButtomWidth: 0.6,
        }}
        _light={{ bg: "#FFE7AB" }}
        px="4"
        py="4"
        borderTopWidth={1}
        borderColor="#2B3A61"
        justifyContent="space-between"
      >
        <Text fontSize={16}>{title}</Text>
        
        <AntDesign name="right" color={colorMode == "light" ? "#FFE7AB" : "#2B3A61"} size={16} />
      </HStack>
    </Pressable>
  );
};

export default ListItem;
