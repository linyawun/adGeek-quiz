import { Router, RouterProvider } from '@tanstack/react-router';
import routeTree from './router';
import { scoreContext } from './context/ScoreContext';
import { useState } from 'react';

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

function App() {
  const [score, setScore] = useState(0);

  return (
    <scoreContext.Provider value={{ score, setScore }}>
      <RouterProvider router={router} context={scoreContext} />
    </scoreContext.Provider>
  );
}

export default App;
