import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from '../configs/axios';
import { useEffect, useState } from 'react';

const useApi = <T>(path: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res: AxiosResponse<T> = await api(path, options);
      setData(res.data);
    } catch (err) {
      setErr(err as Error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [options]);

  return {
    data,
    loading,
    err,
    fetchData,
  }
};

export default useApi;
