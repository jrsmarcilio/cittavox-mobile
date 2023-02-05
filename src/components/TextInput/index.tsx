import React, { useState } from 'react';
import { SafeAreaView, TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface TextInputIconProps extends TextInputProps {
  placeholder: string;
  iosIcon: string;

}

export function TextInputIcon({ placeholder, iosIcon, ...rest }: TextInputIconProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Icon style={styles.icon} name={iosIcon} size={20} color={theme.colors.grayScale[100]} />
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        {...rest}
        secureTextEntry={rest.secureTextEntry && !showPassword}
      />
      {rest.secureTextEntry && (
        <Octicons
          style={[styles.icon, { right: 10 }]}
          name={showPassword ? 'eye-closed' : 'eye'}
          size={20}
          color={theme.colors.grayScale[100]}
          onPress={handleShowPassword}
        />
      )}
    </SafeAreaView>
  );
}