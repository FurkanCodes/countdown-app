import React from 'react';
import YouTube from 'react-youtube';
import './index.css';
export default function Audio() {
  const opts = {
    height: '350',
    width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div className="sticky text-xl font-medium text-white">
      <h1> This video can be used to check audio levels. </h1>
      <YouTube className="flex justify-center mt-4" videoId="W4ktLen9cVM" opts={opts} />
    </div>
  );
}
