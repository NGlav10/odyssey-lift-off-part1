import React from 'react';
import { Layout, QueryResult } from '../components';
import { useQuery, gql } from "@apollo/client";
import TrackCard from '../containers/track-card'

/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <QueryResult data={data} loading={loading} error={error}>
      <Layout grid>
        {data?.tracksForHome?.map(track =>
          <TrackCard key={track.id} track={track} />
        )}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
