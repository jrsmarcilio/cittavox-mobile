import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { SVG } from "../../assets";
import { styles } from './styles'

export function Search() {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.input}
        placeholder="Pesquisar por empresa ou local"
        placeholderTextColor="rgb(150,150,150)"
        onChangeText={(e) => setSearch(e)}
        value={search}
        autoCapitalize="none"
        autoComplete="off"
      />
      <SVG.Search width={21} height={21} />
    </View>
  );
}