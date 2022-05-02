import React from "react";
import { Box } from "native-base";
import ListItem from "../components/ListItem";
import { useColorMode } from 'native-base';

const SettingScreen = ({ navigation }) => {
    const { colorMode } = useColorMode();
    return (
        <Box 
            flex={1}
            _dark={{ bg: "#2B3A61" }}
            _light={{ bg: "#FFE7AB" }}        
        >
            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'red', borderButtomWidth: 0.6 }}
            >
                <ListItem title="Display" backgrondcolor="pink" navigation={navigation} destination="DisplaySetting" />
                <ListItem title="Account" navigation={navigation} />
            </Box>            
        </Box>

    );
};

export default SettingScreen;
