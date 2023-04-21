import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { TrackType } from '../../../typeDef';
import { humanReadableTimeFromSeconds } from '../../../utils/helpers';
import { colors } from '../../../../assets/styles';

type Props = {
  track: TrackType;
};

export default function Track({
  track: {
    title,
    modulesCount,
    length,
    thumbnail,
    author: { name, photo },
  },
}: Props) {
  return (
    <TouchableOpacity style={styles.track}>
      <Image
        source={{ uri: thumbnail }}
        resizeMode={'cover'}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.authorContainer}>
          <Image source={{ uri: photo }} style={styles.authorPhoto} />
          <View style={styles.nameAndModulesContainer}>
            <Text style={styles.authorName}>{name}</Text>
            <Text
              style={
                styles.modules
              }>{`${modulesCount} modules - ${humanReadableTimeFromSeconds(
              length,
            )}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontSize: 17,
    color: colors.textSecondary,
  },
  authorPhoto: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  modules: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  nameAndModulesContainer: {
    marginLeft: 5,
  },
  textContainer: {
    margin: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  track: {
    marginHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowRadius: 5,
    shadowColor: colors.textSecondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
  },
  thumbnail: {
    width: '100%',
    height: 205,
    resizeMode: 'contain',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});
