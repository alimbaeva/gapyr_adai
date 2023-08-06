import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import logo from '../../assets/image/logo.png';
import './footer.scss';

export const Footer: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <footer className={themes ? 'gray' : 'blue'}>
      <div className="conteiner footer">
        <div>
          <img src={logo} alt="" />
        </div>
        <p>
          GapyrAgayBot
          <a href="https://t.me/GapyrAgay_bot" target="_blank" rel="noopener noreferrer"></a>
        </p>
        <p>APEX.EDU</p>
        <p>06.08.2023</p>
        <p>Hackathon AI</p>
      </div>
    </footer>
  );
};
