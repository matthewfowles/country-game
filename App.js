import React, { useCallback } from "react";
import Router from "./Router";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider, theme } from "./styles/theme";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataProvider } from "./contexts/data";
// import mobileAds, { MaxAdContentRating } from "react-native-google-mobile-ads";

// mobileAds()
//   .setRequestConfiguration({
//     // Update all future requests suitable for parental guidance
//     maxAdContentRating: MaxAdContentRating.PG,

//     // Indicates that you want your content treated as child-directed for purposes of COPPA.
//     tagForChildDirectedTreatment: true,

//     // Indicates that you want the ad request to be handled in a
//     // manner suitable for users under the age of consent.
//     tagForUnderAgeOfConsent: true,

//     // An array of test device IDs to allow.
//     testDeviceIdentifiers: ["EMULATOR"],
//   })
//   .then(() => {
//     // Request config successfully set!
//   });

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-light": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Router />
        </DataProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
