import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 32 + 26,
    marginBottom: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  options: {
    marginTop: 24,
    marginHorizontal: 21,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.secondary0,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
    height: 120,
  },
  text: {
    color: theme.colors.heading,
    fontSize: 15,
    margin: 5,


  },
  rowWrapper: {
    flex: 1,
    justifyContent: "space-around",
  }
});