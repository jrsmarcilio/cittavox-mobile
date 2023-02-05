import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { TextInputIcon } from '../../components/TextInput';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Login() {
  return (
    <View style={styles.container}>
      <HeaderNavigate title="Entrar na conta" backScreenNavigation="Starter" />

      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={[styles.text, { fontSize: 24, color: theme.colors.grayScale[900] }]}>
            Bem vindo de volta!
          </Text>

          <Text style={[styles.text, { fontSize: 16, color: theme.colors.grayScale[600] }]}>
            Faça login para continuar
          </Text>
        </View>

        <View style={styles.contentInput}>
          <TextInputIcon placeholder="E-mail" iconName="ios-mail" />
          <TextInputIcon placeholder="Senha" iconName="md-lock-closed-outline" secureTextEntry />

          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? theme.colors.primaryLight : theme.colors.primary },
              styles.button
            ]}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </Pressable>

          <View style={styles.footerText}>
            <Text style={styles.text}>Esqueceu a senha?</Text>
            <Text style={styles.textLink} onPress={() => console.log(".navigate('Register')")}>Trocar Senha</Text>
          </View>

        </View>
      </View>
      
    </View>
  );
}
