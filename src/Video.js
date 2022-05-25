import { forwardRef, useRef, useImperativeHandle } from 'react';
import video1 from './videos/video1.mp4';

const Video = (props, ref) => {
  const video = useRef();
  useImperativeHandle(ref, () => ({
    play: () => {
      video.current.play();
    },
    pause: () => {
      video.current.pause();
    },
  }));
  return <video ref={video} src={video1} width={400} />;
};
export default forwardRef(Video);
