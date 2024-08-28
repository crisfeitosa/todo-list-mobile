import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
      <HomeScreen />
    </>
  );
}
