import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 58,
    marginHorizontal: 21,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  imagem: {
    width: 200,
    height: 200,
    position: 'relative',
    top: -28.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.highlight,
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 28,
    color: theme.colors.highlight
  },
})