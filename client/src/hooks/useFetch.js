import { useState, useEffect } from 'react';
import { request } from '../request';

const useFetch = (url) => {
  let realurl=`https://strapi-app-28ke.onrender.com/api${url}`
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await request.get(realurl);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [realurl]);

  return { data, isLoading, error };
};

export default useFetch;
