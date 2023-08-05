import { FC } from 'react';
import logo from '../../assets/image/logo.jpg';
import sun from '../../assets/icone/sun.svg';
import moon from '../../assets/icone/moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setThemes } from '../../store/themeReducer';

import './header.scss';

export const Header: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleTheme = () => {
    localStorage.setItem('themes', JSON.stringify(!themes));
    dispatch(setThemes(!themes));
  };

  return (
    <header>
      <div className="container header">
        <img src={logo} alt="logo" className="logo" />
        <button className="cange__theme" onClick={handleTheme}>
          {themes ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
        </button>
      </div>
    </header>
  );
};
