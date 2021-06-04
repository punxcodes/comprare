import React from 'react';
import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}
