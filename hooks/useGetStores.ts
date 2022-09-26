import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetStores = (API: string) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API, {
        auth: {
          username: 'admin',
          password: '123'
        }
      });
      setStores(response.data.data);
    }
    fetchData();
  }, [API]);

  return stores;
};

export default useGetStores;
