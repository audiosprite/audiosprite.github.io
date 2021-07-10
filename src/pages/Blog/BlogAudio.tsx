import * as React from 'react';
import { useAudio } from '../../hooks';
import './BlogAudio.scss';

type BlogAudioProps = { src: string };
export const BlogAudio = ({ src }: BlogAudioProps) => {
  const { element, controls, state } = useAudio({ src });
  //   return <div>{element}</div>;
  return (
    <div className="BlogAudio">
      <audio controls src={src} />
    </div>
  );
};
