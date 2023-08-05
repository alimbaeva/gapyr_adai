import { FC } from 'react';
import AnimatedTextWord from './AnimatedTextWord';
import foto from '../../assets/image/foto.png';

import './herro.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Herro: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <div className={themes ? 'gray' : 'blue'}>
      <div className="container herro">
        <div className="text-block">
          <AnimatedTextWord text="Знание подобно мосту между" />
          <AnimatedTextWord text="прошлым и будущим," />
          <AnimatedTextWord text="на котором мы переходим," />
          <AnimatedTextWord text="но не забываем о своих корнях." />
        </div>

        <div className="img">
          <img src={foto} alt="" />
        </div>
      </div>
    </div>
  );
};
