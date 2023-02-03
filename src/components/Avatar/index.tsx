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
  const { secondary0, secondary10 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary10, secondary0]}>
      {
        urlImage ? (
          <Image source={{ uri: urlImage }} style={styles.avatar} />
        ) : (
          <IconSvg width='32' height='32' />
        )
      }
    </LinearGradient>
  )

}