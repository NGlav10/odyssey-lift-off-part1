import { useMemo } from 'react';
import { Dimensions } from 'react-native';

export const useWindow = () => useMemo(() => Dimensions.get('window'), []);
