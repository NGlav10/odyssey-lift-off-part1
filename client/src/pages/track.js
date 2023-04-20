import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Layout, QueryResult, TrackDetail} from '../components';
import {useParams} from 'react-router-dom';

const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

const Track = () => {
  const {trackId} = useParams();
  const {loading, error, data} = useQuery(GET_TRACK, {
    variables: {trackId},
  });

  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout>
        <TrackDetail track={data?.track} />
      </Layout>
    </QueryResult>
  );
};

export default Track;
