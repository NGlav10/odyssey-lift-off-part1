import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/imgs/space_cat_logo.png';
import { colors } from '../../assets/styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.textContainer}>
        <Text style={styles.catstronaut}>Catstronaut</Text>
        <Text style={styles.kittySpaceAcademy}>Kitty space academy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catstronaut: {
    fontSize: 30,
    color: colors.accent,
    fontWeight: '600',
  },
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
    padding: 15,
  },
  kittySpaceAcademy: {
    color: colors.accent,
    fontSize: 15,
  },
  textContainer: { alignSelf: 'center', marginLeft: 5 },
});
