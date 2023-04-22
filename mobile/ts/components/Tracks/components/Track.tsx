import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { TrackType } from '../../../typeDef';
import { humanReadableTimeFromSeconds } from '../../../utils/helpers';
import { colors, styleGuide } from '../../../../assets/styles';
import { useWindow } from '../../../hooks/useWindowDimensions';
import { useNavigation } from '@react-navigation/native';

type Props = {
  track: TrackType;
};

const Track = ({
  track: {
    id,
    title,
    modulesCount,
    length,
    thumbnail,
    author: { name, photo },
  },
}: Props) => {
  const window = useWindow();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.track}
      onPress={() => {
        navigation.navigate('TrackDetail', { trackId: id });
      }}>
      <Image
        source={{ uri: thumbnail }}
        resizeMode="cover"
        style={[styles.thumbnail, { width: window.width - 30 }]}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, styleGuide.h1]}>{title}</Text>
        <View style={styles.authorContainer}>
          <Image source={{ uri: photo }} style={styles.authorPhoto} />
          <View style={styles.nameAndModulesContainer}>
            <Text style={styleGuide.body1}>{name}</Text>
            <Text
              style={
                styleGuide.body2
              }>{`${modulesCount} modules - ${humanReadableTimeFromSeconds(
              length,
            )}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authorContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorPhoto: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  nameAndModulesContainer: {
    marginLeft: 5,
  },
  textContainer: {
    margin: 15,
  },
  title: {
    alignSelf: 'center',
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
    height: 220,
    resizeMode: 'cover',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});

export default memo(Track);
