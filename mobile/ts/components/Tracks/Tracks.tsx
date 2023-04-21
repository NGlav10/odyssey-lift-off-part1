import React from 'react';
import { FlatList } from 'react-native';
import { QueryResult, useQuery } from '@apollo/client';

import { TRACKS } from '../../api/getTracks';
import { Query } from '..';
import { Track } from './components';
import { GetTracksType, TrackType } from '../../typeDef';

export default function Tracks() {
  const queryResult: QueryResult<GetTracksType> = useQuery(TRACKS);

  return (
    <Query<GetTracksType> queryResult={queryResult}>
      <FlatList<TrackType>
        data={queryResult.data?.tracksForHome}
        renderItem={({ item }) => {
          return <Track track={item} />;
        }}
      />
    </Query>
  );
}
