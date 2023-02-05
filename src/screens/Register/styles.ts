import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  // add overflow when keyboard is open in container style
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: Constants.statusBarHeight + 12,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 21,
    marginTop: 12,
  },
  contentText: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: Constants.statusBarHeight + 22,
  },
  contentInput: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 22,
  },
  text: {
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textButton: {
    color: theme.colors.heading,
    fontSize: 16,
    fontWeight: 'bold'
  },
  textLink: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 5
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
});