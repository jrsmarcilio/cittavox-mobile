import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  const { secondary0, secondary10 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary0, secondary10]}
    >
      {children}
    </LinearGradient>
  )
}