import { createContext, useContext } from 'react';

export const scoreContext = createContext();

export const useScoreContext = () => useContext(scoreContext);
