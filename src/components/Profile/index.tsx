import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../context/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';

import { SVG } from '../../assets';

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ])
  }

  const handleDefineWellcomeMessage = () => {
    const hour = new Date().getHours();
    return hour < 12 ? 'Bom dia' : hour >= 12 && hour < 18 ? 'Boa tarde' : 'Boa noite'
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <RectButton onPress={handleSignOut}>
          <Avatar IconSvg={SVG.User} />
        </RectButton>

        <Text style={styles.greeting}>
          Home
        </Text>

        <RectButton onPress={handleSignOut}>
          <Avatar IconSvg={SVG.Notify} />
        </RectButton>
      </View>

      <View style={styles.user}>
        <Text style={styles.greeting}>
          Olá,  {user.firstName || 'Anonymous'}
        </Text>

        <Text style={styles.message}>
          {handleDefineWellcomeMessage()}
        </Text>
      </View>

    </View >
  )

}