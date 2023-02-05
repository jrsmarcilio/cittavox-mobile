import React from 'react';
import { View, Text, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { TextInputIcon } from '../../components/TextInput';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={Platform.OS === 'ios' && { flex: 1 }}
        keyboardVerticalOffset={30}
      >
        <HeaderNavigate title="Cadastro" backScreenNavigation="Starter" />

        <View style={styles.content}>
          <View style={styles.contentText}>
            <Text style={[styles.text, { fontSize: 16, color: theme.colors.grayScale[600] }]}>
              Crie sua conta para fazer sua reclamação
            </Text>
          </View>

          <View style={styles.contentInput}>
            <TextInputIcon iconName="user" iconFamily="SimpleLineIcons" placeholder="Nome completo" />
            <TextInputIcon iconName="date" iconFamily="Fontisto" placeholder="Data de nascimento" />
            <TextInputIcon iconName="mail" placeholder="E-mail" />
            <TextInputIcon iconName="md-lock-closed-outline" placeholder="Senha" secureTextEntry />
            <TextInputIcon iconName="md-lock-closed-outline" placeholder="Confirmar senha" secureTextEntry />

            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? theme.colors.primaryLight : theme.colors.primary },
                styles.button
              ]}
            >
              <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>

            <View style={styles.footerText}>
              <Text style={styles.text}>Já tem uma conta?</Text>
              <Text style={styles.textLink} onPress={() => console.log(".navigate('Register')")}>Entrar</Text>
            </View>

          </View >
        </View >
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}