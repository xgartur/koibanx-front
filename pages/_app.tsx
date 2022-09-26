import AppContext from '../context/AppContext';
import useInitialState from '../hooks/initialState'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: any) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
