import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../assets/styles';

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.silver.dark,
  },
});

export default Divider;
