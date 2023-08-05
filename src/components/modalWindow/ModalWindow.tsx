import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './modalWindow.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setModalOpen } from '../../store/themeReducer';

export type Props = {
  children?: ReactNode;
  active: boolean;
};

export const ModalWindow: FC<Props> = (props: Props) => {
  const { modalOpen } = useSelector((state: RootState) => state.ThemesReducer);
  const dispatch = useDispatch<AppDispatch>();
  const stopProp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleModal = () => {
    dispatch(setModalOpen(false));
  };

  return ReactDOM.createPortal(
    props.active && (
      <div className="modal active" onClick={handleModal}>
        <div className="modal__content" onClick={(e) => stopProp(e)}>
          {props.children}
        </div>
      </div>
    ),
    document.body
  );
};
