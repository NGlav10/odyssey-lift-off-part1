import { StyleSheet } from 'react-native';
import { colors as SKColors } from '@apollo/space-kit/colors';

export const colors = {
  primary: SKColors.indigo.base,
  secondary: SKColors.teal.base,
  accent: SKColors.pink.base,
  background: SKColors.silver.light,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,
  ...SKColors,
};

export const styleGuide = StyleSheet.create({
  h1: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.text,
  },
  h2: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
  },
  body1: {
    fontSize: 14,
    color: colors.text,
  },
  body2: {
    fontSize: 10,
    color: colors.text,
  },
});
