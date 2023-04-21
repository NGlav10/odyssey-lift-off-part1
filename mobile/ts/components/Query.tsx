import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { QueryResult } from '@apollo/client';

type Props<T> = {
  queryResult: QueryResult<T>;
  children: ReactNode;
};

export default function Query<T>({
  queryResult: { data, loading, error },
  children,
}: Props<T>) {
  if (loading) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  } else if (error) {
    return <>{error}</>;
  } else if (!data) {
    return <p>Nothing to show...</p>;
  } else {
    return <>{children}</>;
  }
}
