import { Text, View } from "react-native";

import { SVG } from '../../assets';
import { styles } from "./styles";

export function BannerWelcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.subtitle}>Faça sua reclamação</Text>
        <Text style={styles.subtitle}>publica sem medo</Text>
      </View>
      <SVG.Welcome style={styles.imagem} />
    </View>
  )
}