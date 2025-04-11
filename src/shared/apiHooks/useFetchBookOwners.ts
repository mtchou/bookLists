import {useQuery} from '@tanstack/react-query';
import {get} from '../api/axios-rest';
import {queryKeys} from './queryKeys';

const fetchBookOwners = async () => {
  const response = await get('/v1/bookowners');
  return response.data;
};

export const useFetchBookOwners = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: [queryKeys.getBookOwners],
    queryFn: fetchBookOwners,
    enabled: true, // Enable the query by default
    refetchOnWindowFocus: false, // Disable refetching on window focus
    retry: 1 // Retry once on failure
  });

  return {
    data,
    isLoading,
    error
  };
};
