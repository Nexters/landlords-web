import request from 'api/request';
import { useEffect, useState } from 'react';

interface State<T> {
  loading: boolean;
  error: boolean;
  data: T | null;
}

const initialState = { loading: true, error: false, data: null };

const useFetch = <T>(url: string): State<T> => {
  const [fetched, setFetched] = useState<State<T>>(initialState);

  useEffect(() => {
    const fetch = async () => {
      const { error, data } = await request.get<T>(url);
      setFetched({ loading: false, error, data });
    };
    fetch();
  }, []);

  return fetched;
};

export default useFetch;
