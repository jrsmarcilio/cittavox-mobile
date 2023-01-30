import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.overlay,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 21,
    marginHorizontal: 21,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  input: {
    color: theme.colors.heading,
    fontSize: 14,
    width: '90%',
    alignSelf: 'center',
  },
});