import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dimensions } from "react-native";
import { NativeBaseProvider, Center, Box,useColorMode } from 'native-base';
import LottieView from "lottie-react-native";


const Upload = () => {
    const WIDTH = Dimensions.get('window').width;
    const { colorMode } = useColorMode();
    return (
        <SafeAreaProvider>
        <NativeBaseProvider>
          <Center flex={1} bg={colorMode == "light" ? "#FFE7AB" : "#2B3A61"}>
            <Box h={WIDTH} w={WIDTH}>
              <LottieView
                source={colorMode == "light" ? require("../json/BrightLoading-N.json"):require("../json/darkLoading-NNN.json")}
                loop
                autoPlay
              />
            </Box>
          </Center>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
}

export default Upload;