import Cdown from './countdown';
import About from './about';
import Audio from './audio';
import './index.css';
import { useState, useRef, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { TabPanel } from '@material-tailwind/react';

export default function App() {
  const [active, setActive] = useState();
  const [buttonText, setButtonText] = useState('Click to set duration');
  const inputRef = useRef();

  const handleClick = () => {
    setActive(true);
    // if (active === true) {
    //   setActive(false);
    // } else {
    //   setActive(true);
    //   setButtonText('Click TWICE for new duration');
    // }
  };
  return (
    <div className="flex flex-col h-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <section className="relative text-center">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 lg:py-32">
          <h1 className="animate-tracking-in-expand mt-1 text-4xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
            Countdown Timer
          </h1>

          <Tab.Group>
            <Tab.List className="sticky text-sm font-medium text-white">
              <div className="text-2xl flex items-center justify-evenly h-24 sm:px-6 lg:px-8">
                <Tab className="transform  transition duration-500 hover:scale-125 flex justify-center items-center">
                  Timer
                </Tab>
                <Tab className="transform  transition duration-500 hover:scale-125 flex justify-center items-center">
                  Check Audio
                </Tab>
                {/* <Tab className="transform  transition duration-500 hover:scale-125 flex justify-center items-center">
                  Presets
                </Tab> */}
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="relative flex py-7 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>

                  <span className="flex-shrink  text-4xl font-medium tracking-wide text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                    Type the duration in minutes
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="max-w-2xl mx-auto mt-8 text-xl font-medium text-white">
                  <h2 className="">{!active && 'Time will be displayed here'}</h2>
                  <div className="mt-1 lg:text-9xl font-extrabold text-transparent uppercase tracking-tighest sm:text-6xl  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                    {active === true && (
                      <Cdown duration={Math.floor(parseInt(inputRef.current.value) * 60 * 1000)} />
                    )}
                    {/* {active === '150mins' && <Cdown duration={9000000} />}
                    {active === '145mins' && <Cdown duration={8700000} />}
                    {active === '60min' && <Cdown duration={3600000} />} */}
                  </div>
                  <div className="flex justify-evenly max-w-2xl mx-auto ptmt-2 text-xl font-medium text-black">
                    <input
                      className="flex text-center"
                      placeholder="TYPE IN MINUTES"
                      ref={inputRef}
                      type="text"
                      id="number"
                      name="number"
                      autoComplete="off"
                    />
                  </div>
                  <button
                    className="text-xl transform  transition duration-200 hover:scale-125  bg-red-100 hover:bg-red-500 hover:text-white text-red-500 text-center py-2 px-4 rounded mt-7"
                    onClick={handleClick}
                  >
                    {buttonText}
                  </button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <Audio />
              </Tab.Panel>
              {/* <Tab.Panel>
                <div className="relative flex py-7 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>

                  <span className="flex-shrink  text-4xl font-medium tracking-wide text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                    Select Duration
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="flex justify-evenly max-w-2xl mx-auto mt-8 text-xl font-medium text-white">
                  <button
                    className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
                    onClick={() => setActive('150mins')}
                  >
                    150 Minutes
                  </button>
                  <button
                    className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
                    onClick={() => setActive('145mins')}
                  >
                    145 Minutes
                  </button>
                  <button
                    className="transform  transition duration-500 hover:scale-125 flex justify-center items-center"
                    onClick={() => setActive('60min')}
                  >
                    60 Minutes
                  </button>
                </div>
                <div className="max-w-2xl mx-auto mt-8 text-xl font-medium text-white">
                  <h2 className="">{!active && 'Time will be displayed here'}</h2>
                  <div className="mt-1 lg:text-9xl font-extrabold text-transparent uppercase tracking-tighest sm:text-6xl  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                    {active === 'timer' && (
                      <Cdown duration={Math.floor(parseInt(inputRef.current.value) * 60 * 1000)} />
                    )}
                    {active === '150mins' && <Cdown duration={9000000} />}
                    {active === '145mins' && <Cdown duration={8700000} />}
                    {active === '60min' && <Cdown duration={3600000} />}
                  </div>
                </div>
              </Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <footer>
        <About />
      </footer>
    </div>
  );
}
