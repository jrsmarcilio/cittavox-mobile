import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#2486C4',
    primaryLight: '#4DB8FF',

    grayScale: {
      100: '#EFEFEF',
      200: '#DDDDDD',
      400: '#BEBEBE',
      600: '#A9A9A9',
      800: '#747474',
      900: '#333333',
    },


    secondaryScale: {
      100: '#7ECEFC',
      200: '#66CCFF',
      400: '#4DB8FF',
      600: '#3399FF',
      800: '#1A8AEB',
    },


    secondary30: '#276678',
    secondary20: '#1687A7',
    secondary10: '#D3E0EA',
    secondary0: '#F6F5F5',
    // Pallete in https://colorhunt.co/palette/f6f5f5d3e0ea1687a7276678

    overlay: 'rgba(0,0,0,0.7)',
    highlight: '#ABB1CC',
    heading: '#DDE3F0',
    line: '#991F36',
    on: '#32BD50',

    discord: '#7289da',
  },

  tabBarHeight: Platform.OS === 'ios' ? 100 : 70,

  fonts: {
    text400: 'Inter_400Regular',
    text500: 'Inter_500Medium',
    fredokaOne400: 'FredokaOne_400Regular',
    Nunito800: 'Nunito_800ExtraBold',
  }
};
