/* eslint-disable react/prop-types */
import './index.css';
import Countdown, { zeroPad } from 'react-countdown';
import { useRef, useState } from 'react';

export default function Cdown({ duration }) {
  const [state, setState] = useState({ date: Date.now() + duration });

  const ref = useRef();

  const handleStart = (e) => {
    ref.current?.start();
  };

  const handlePause = (e) => {
    ref.current?.pause();
  };

  const handleReset = () => {
    setState({ date: Date.now() + duration });
  };

  return (
    <>
      <Countdown
        key={state.date}
        date={state.date}
        autoStart={false}
        ref={ref}
        renderer={({ formatted: { hours, minutes, seconds }, completed }) => {
          if (completed) {
            // Render a completed state
            return <div>Well. The time is up!</div>;
          } else {
            // Render a countdown
            return (
              <h1 className="m-0 font-weight-bold">
                {hours}:{minutes}:{seconds}
              </h1>
            );
          }
        }}
      />
      <div className="flex justify-evenly max-w-2xl mx-auto mt-8 mb-8 text-xl font-medium text-white">
        <button
          className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
