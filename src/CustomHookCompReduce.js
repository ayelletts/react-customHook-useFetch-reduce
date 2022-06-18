import React from 'react';
import { useFetch } from './useFetch';

export const CustomHookCompReduce = () => {
  /*
    success - https://run.mocky.io/v3/142d2cf3-a90e-416c-8fb9-616a9dedc757?mocky-delay=1000ms
    error - https://run.mocky.io/v3/daa4a900-b2bd-4a28-9704-998ec0db7c26?mocky-delay=1000ms
  */
  const [isLoading, error, data] = useFetch(
    'https://run.mocky.io/v3/142d2cf3-a90e-416c-8fb9-616a9dedc757?mocky-delay=1000ms'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data?.message}</div>;
};
