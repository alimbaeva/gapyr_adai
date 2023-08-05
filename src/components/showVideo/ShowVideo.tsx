import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../../assets/video/video.mp4';
import './showVideo.scss';

export const ShowVideo: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [changeVideo, setChangeVideo] = useState(true);
  const [smoleVideo, setSmoleVideo] = useState(true);

  const playVideo = () => {
    setIsPlaying(!isPlaying);
    if (!smoleVideo) {
      setSmoleVideo(true);
      setIsPlaying(true);
    }
  };

  const handleResize = () => {
    window.innerWidth < 500 ? setChangeVideo(false) : setChangeVideo(true);
  };

  const handleVideoParants = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if ((e.target as HTMLElement).className === 'video') {
      setSmoleVideo(false);
    }
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 500 ? setChangeVideo(false) : setChangeVideo(true);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={smoleVideo ? 'video' : 'video-smole'}
      onClick={(e) => handleVideoParants(e)}
    >
      <div
        className={smoleVideo ? 'video-block' : 'video-block-smol'}
        style={{ width: `${smoleVideo ? (changeVideo ? '450px' : '250px') : '100px'}` }}
      >
        <ReactPlayer url={video} controls={false} playing={isPlaying} width="100%" height="100%" />
        <div className="btn-video" onClick={playVideo}></div>
      </div>
    </section>
  );
};
