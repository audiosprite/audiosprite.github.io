import * as React from 'react';

const divStyle = {
  fontSize: 10,
  color: '#cccccc',
  lineBreak: 'anywhere',
  wordBreak: 'normal',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontFamily:
    'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
  fontWeight: 100,
};

const linkStyle = {
  color: '#cccccc',
  textDecoration: 'none',
};

export const SoundCloudReel = () => {
  return (
    <div style={{ maxWidth: 853, width: '100%' }}>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/310569779&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style={divStyle as React.CSSProperties}>
        <a
          href="https://soundcloud.com/audiosprite"
          title="John Fio"
          target="_blank"
          style={linkStyle}
        >
          John Fio
        </a>{' '}
        ·{' '}
        <a
          href="https://soundcloud.com/audiosprite/sets/reel"
          title="Reel"
          target="_blank"
          style={linkStyle}
        >
          Reel
        </a>
      </div>
    </div>
  );
};
