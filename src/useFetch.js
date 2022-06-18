import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setError':
      return {
        ...state,
        isLaoding: false,
        error: action.payload,
      };
    case 'setData':
      return {
        ...state,
        isLaoding: false,
        data: action.payload,
      };
  }
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, { isLaoding: true });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        if (info.error) {
          dispatch({
            type: 'setError',
            payload: info.error,
          });
        } else {
          dispatch({
            type: 'setData',
            payload: info.message,
          });
        }
      });
  }, []);
  return [
    state.isLoading,
    state.error ? { message: state.error } : null,
    state.data ? { message: state.data } : null,
  ];
};
