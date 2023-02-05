import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import { Starter } from '../screens/Starter';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

SplashScreen.preventAutoHideAsync();

export function Routes() {
  // const { user } = useAuth();
  const [user, setUser] = useState({ id: undefined });
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    FredokaOne_400Regular,
    Nunito_800ExtraBold
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
      <Register />
      {/* <AppRoutes /> */}
    </NavigationContainer>
  )
}