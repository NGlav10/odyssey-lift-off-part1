import React from 'react';
import { Text } from 'react-native';

import { TrackType } from '../../../typeDef';

type Props = {
  track: TrackType;
};

export default function Track({ track }: Props) {
  return <Text>{track.title}</Text>;
}
