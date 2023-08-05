import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Header } from './components/header/Header';
import { Herro } from './components/herro/Herro';
import { QrCode } from './components/qr/QrCode';
import { TargetProject } from './components/targetProject/TargetProject';

export const App: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  useEffect(() => {
    document.body.style.backgroundColor = themes ? '#000' : '#FFF';
    document.body.style.color = themes ? '#FFF' : '#000';
  }, [themes]);

  return (
    <Router>
      <Header />
      <Herro />
      <TargetProject />
      <QrCode />
    </Router>
  );
};
