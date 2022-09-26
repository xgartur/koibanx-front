import { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  stores: [],
  order: {
    commerce: 0,
    cuit: 0
  },
  params: {
    like: '',
    active: 'not'
  },
  page: 0,
  pages: 0,
};

const API = 'https://koibanx-backtest.herokuapp.com/api/store'
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    buildParams()
  }, [state.params, state.page]);

  const buildParams = () => {
    const page = `page=${state.page}`
    const like = `like=${state.params.like}`
    const isActive = `active=${state.params.active}`
    const params = `?${page}&${state.params.like != '' ? like : ''}&${state.params.active == 'not' ? '' : isActive}`
    setStore(params)
  }
  const cleanParams = () => {
    setState({
      ...state,
      page: 0,
      params: {
        like: '',
        active: 'not'
      },
    });
  }
  const setOrderCommerce = (num: number) => {
    setState({
      ...state,
      order: { cuit: state.order.cuit, commerce: num },
    });
  }
  const setOrderCuit = (num: number) => {
    setState({
      ...state,
      order: { ...state.order, cuit: num },
    });
  }
  const setParams = (like: string, active: string) => {
    setState({
      ...state,
      params: {
        like,
        active
      },
    });
  }
  const setPage = (page: number) => {
    setState({
      ...state,
      page
    });
  }
  const setStore = async (params: string) => {
    const response = await axios(`${API}${params}`, {
      auth: {
        username: 'admin',
        password: '123'
      }
    });
    setState({
      ...state,
      stores: response.data.data,
      page: response.data.page,
      pages: response.data.pages
    });
  }

  return {
    state,
    setOrderCuit,
    setOrderCommerce,
    setStore,
    setParams,
    cleanParams,
    setPage
  };
};

export default useInitialState;
