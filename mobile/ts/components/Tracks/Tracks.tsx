import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { QueryResult, useQuery } from '@apollo/client';

import { TRACKS } from '../../api/getTracks';
import { Query } from '..';
import { Track } from './components';
import { Header } from '..';
import { GetTracksType, TrackType } from '../../typeDef';
import { colors } from '../../../assets/styles';

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export default function Tracks() {
  const queryResult: QueryResult<GetTracksType> = useQuery(TRACKS);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <Header />
      <Query<GetTracksType> queryResult={queryResult}>
        <FlatList<TrackType>
          data={queryResult.data?.tracksForHome}
          renderItem={({ item }) => <Track track={item} />}
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.tracks}
        />
      </Query>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tracks: {
    paddingBottom: 100,
    paddingTop: 15,
  },
  itemSeparator: { height: 15 },
});
