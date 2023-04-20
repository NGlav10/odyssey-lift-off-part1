import { colors as SKColors } from '@apollo/space-kit/colors';

export const styles = {};

export const colors = {
    primary: SKColors.indigo.base,
    secondary: SKColors.teal.base,
    accent: SKColors.pink.base,
    background: SKColors.silver.light,
    grey: SKColors.silver.dark,
    text: SKColors.black.base,
    textSecondary: SKColors.grey.dark,
    ...SKColors,
};