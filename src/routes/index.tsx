import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';

import { AppRoutes } from './app.routes';
import { TabNavigation } from '../components/TabNavigation';
import { Starter } from '../screens/Starter';
import { RootStackParamList } from '../@types/navigate';

SplashScreen.preventAutoHideAsync();

export function Routes() {
  // const { user } = useAuth();
  const [user, setUser] = useState({ id: undefined });
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    FredokaOne_400Regular
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
      <Starter />
      {/* <AppRoutes /> */}
    </NavigationContainer>
  )
}