import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Header } from './components/header/Header';

export const App: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  useEffect(() => {
    document.body.style.backgroundColor = themes ? '#000' : '#FFF';
    document.body.style.color = themes ? '#FFF' : '#000';
  }, [themes]);

  return (
    <Router>
      <Header />
    </Router>
  );
};
