import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

import { useRoute } from '@react-navigation/native';
import { colors, styleGuide } from '../../assets/styles';
import { useWindow } from '../hooks/useWindowDimensions';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import Divider from './Divider';
import { useQuery } from '@apollo/client';
import { TRACK } from '../api/getTrack';
import Query from './Query';
import { GetTrackType } from '../typeDef';

const TrackDetail = () => {
  const window = useWindow();

  const {
    params: { trackId },
  } = useRoute();
  const queryResult = useQuery<GetTrackType>(TRACK, {
    variables: {
      trackId,
    },
  });

  const {
    author,
    length,
    modulesCount,
    thumbnail,
    title,
    numberOfViews,
    modules,
    description,
  } = queryResult.data?.track ?? {};

  return (
    <Query<GetTrackType> queryResult={queryResult}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{ paddingTop: 15 }}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={[styles.thumbnail, { width: window.width - 30 }]}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, styleGuide.h1]}>{title}</Text>
          <Divider />
          <View style={styles.middleContainer}>
            <View style={styles.nameAndModulesContainer}>
              <Text style={styleGuide.h2}>Track Details</Text>
              <Text style={[styleGuide.body1, styles.views]}>
                {numberOfViews} view(s)
              </Text>
              <Text style={styleGuide.body1}>{`${modulesCount} modules`}</Text>
              <Text style={styleGuide.body1}>
                {humanReadableTimeFromSeconds(length)}
              </Text>
            </View>
            <View style={styles.authorContainer}>
              <Text style={styleGuide.h2}>Author</Text>
              <Image
                source={{ uri: author?.photo }}
                style={styles.authorPhoto}
              />
              <Text style={styleGuide.body1}>{author?.name}</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.modulesContainer}>
            <Text style={[styles.modulesHeader, styleGuide.h2]}>Modules</Text>
            {modules?.map(module => (
              <View key={module.id} style={styles.modulesRow}>
                <Text style={styleGuide.body1}>{module.title}</Text>
                <Text style={styleGuide.body1}>
                  {humanReadableTimeFromSeconds(module.length)}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.markdown}>
          <Markdown>{description ?? ''}</Markdown>
        </View>
      </ScrollView>
    </Query>
  );
};

const styles = StyleSheet.create({
  authorContainer: {
    alignItems: 'center',
  },
  authorPhoto: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginVertical: 5,
  },
  markdown: {
    marginHorizontal: 15,
    marginBottom: 100,
  },
  middleContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modulesContainer: {
    marginTop: 15,
  },
  modulesHeader: {
    alignSelf: 'center',
    paddingBottom: 5,
  },
  modulesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameAndModulesContainer: {
    marginLeft: 5,
  },
  scrollview: {
    height: '100%',
    backgroundColor: colors.background,
  },
  textContainer: {
    margin: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.silver.dark,
    borderRadius: 5,
    padding: 15,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 15,
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
    borderRadius: 5,
    alignSelf: 'center',
  },
  views: {
    color: colors.accent,
    paddingTop: 5,
  },
});

export default TrackDetail;
