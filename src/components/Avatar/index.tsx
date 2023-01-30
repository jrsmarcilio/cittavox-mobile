import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { IconSvg } from '../../@types/default';

type AvatarProps = {
  urlImage?: string;
  IconSvg: IconSvg
}

export function Avatar({ urlImage, IconSvg }: AvatarProps) {
  const { secondary20, secondary30 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary20, secondary30]}
    >
      {
        urlImage ? (
          <Image source={{ uri: urlImage }} style={styles.avatar} />
        ) : (
          <IconSvg width='28' height='28' />
        )
      }
    </LinearGradient>
  )

}