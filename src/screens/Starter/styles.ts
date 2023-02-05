import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.fredokaOne400,
    fontWeight: '400',
    fontSize: 64,
    lineHeight: 77,
    color: theme.colors.primary,
  },
  subTitle: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    marginRight: 5
  },
  button: {
    width: 300,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: theme.colors.heading,
    fontSize: 16,
    fontWeight: 'bold'
  },
  textLink: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
});