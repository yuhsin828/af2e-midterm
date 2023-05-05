import 'antd/dist/reset.css';
import './App.css';
import { Provider } from "react-redux";
import Router from './Router';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

// import { feedProducts } from './api';
// feedProducts();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
