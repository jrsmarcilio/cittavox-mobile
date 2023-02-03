import { NavigationContainer } from '@react-navigation/native';

import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';

import { AppRoutes } from './app.routes';
import { TabNavigation } from '../components/TabNavigation';

SplashScreen.preventAutoHideAsync();

export function Routes() {
  // const { user } = useAuth();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer
      onReady={onLayoutRootView}
    >
      {/* //  { user.id ? <AppRoutes /> : <SignIn /> } */}
      <AppRoutes />
    </NavigationContainer>
  )
}