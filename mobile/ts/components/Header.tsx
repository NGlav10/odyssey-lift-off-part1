import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/imgs/space_cat_logo.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View>
        <Text style={styles.catstronaut}>Catstronaut</Text>
        <Text style={styles.kittySpaceAcademy}>Kitty space academy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catstronaut: {
    fontSize: 25,
    color: 'pink',
  },
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    padding: 15,
  },
  kittySpaceAcademy: {},
});
