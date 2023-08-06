import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './goChatBot.scss';

export const GoChatBot: FC = () => {
  const { themes } = useSelector((state: RootState) => state.ThemesReducer);

  return (
    <section className={themes ? 'gray' : 'blue'}>
      <div className="container go-chat-bot">
        <div className="button">
          <p>Перейти на - GapyrAgayBot</p>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </section>
  );
};
