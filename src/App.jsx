import { Router, RouterProvider } from '@tanstack/react-router';
import routeTree from './router';
import { store } from './store';
import { Provider } from 'react-redux';

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
