import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { styles } from './styles';

// import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
// import { RootStackParamList } from '../../@types/navigate';
import { theme } from '../../global/styles/theme';

// type StarterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Starter'>;
// type StarterProps = { navigation: StarterScreenNavigationProp; }

export function Starter() {

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Image source={require('../../assets/png/cittavox-logo.png')} />
        <Text style={styles.title}>Cittavox</Text>
        <Text style={styles.subTitle}>Gestão colaborativa das cidades</Text>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? theme.colors.secondary30 : theme.colors.primary },
            styles.button
          ]}
        >
          <Text style={styles.textButton}>Entrar na conta</Text>
        </Pressable>
        
        <View style={styles.footerText}>
          <Text style={styles.text}>Não possui conta?</Text>
          <Text style={styles.textLink} onPress={() => console.log(".navigate('Register')")}>Cadastrar</Text>
        </View>
      </View>
    </View>
  );
}

