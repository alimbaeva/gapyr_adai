import { FC, useRef } from 'react';
import QRCode from 'qrcode.react';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setModalOpen } from '../../store/themeReducer';
import whatsapp from '../../assets/icone/whatsapp.svg';
import viber from '../../assets/icone/viber.svg';
import telegram from '../../assets/icone/telegram.svg';
import copy from '../../assets/icone/copy.svg';

import './qrcode.scss';

export const QR: FC = () => {
  const { modalOpen } = useSelector((state: RootState) => state.ThemesReducer);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const qrData = 'https://example.com'; // Здесь поместить свои данные

  const handleDownloadQRCode = () => {
    const qrCanvas = document.querySelector('canvas');

    if (qrCanvas && downloadLinkRef.current) {
      const qrDataURL = qrCanvas.toDataURL('image/png');
      downloadLinkRef.current.href = qrDataURL;
      downloadLinkRef.current.download = 'qrcode.png';
      downloadLinkRef.current.click();
    }
  };

  const handleModal = () => {
    dispatch(setModalOpen(true));
  };

  const sendLink = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const dataSend = e.currentTarget.id.split('__');

    const encodedLink = encodeURIComponent(qrData);
    const appUrl = `${dataSend[1]}${encodedLink}`;

    window.open(appUrl, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(qrData);
  };

  return (
    <div className="QR-block">
      <ModalWindow active={modalOpen}>
        <ul className="send-link">
          <li onClick={copyLink} id="">
            <p>Копировать ссылку</p>
            <img src={copy} />
          </li>
          <li onClick={sendLink} id="WhatsApp__https://api.whatsapp.com/send?text=">
            <p>WhatsApp</p>
            <img src={whatsapp} />
          </li>
          <li onClick={sendLink} id="Telegram__https://t.me/share/url?url=">
            <p>Telegram</p>
            <img src={telegram} />
          </li>
          <li onClick={sendLink} id="Viber__viber://forward?text=">
            <p>Viber</p>
            <img src={viber} />
          </li>
        </ul>
      </ModalWindow>
      <div>
        <h2>QR-код</h2>
        <QRCode value={qrData} size={360} />
        <div className="btn-block">
          <div className="button" onClick={handleModal}>
            <p>Поделиться</p>
          </div>
          <div className="button" onClick={handleDownloadQRCode}>
            <p>Скачать</p>
          </div>
          <a ref={downloadLinkRef} style={{ display: 'none' }} />
        </div>
      </div>
    </div>
  );
};