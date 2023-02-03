import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

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