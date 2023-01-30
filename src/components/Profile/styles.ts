import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 27,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  greeting: {
    fontFamily: theme.fonts.text500,
    fontSize: 21,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.text500,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  }
});