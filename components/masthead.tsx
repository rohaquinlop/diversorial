import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
        <source src="/assets/masthead-bg.mp4" type="video/mp4; codecs=hvc1" />
      </video>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Diversorial</h1>
        <h2 className="mb-2 text-2xl xl:text-3x tracking-tight">
          <span>Realidad virtual, narrativa y arte para</span> <span>personas sensorialmente diversas</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <Image src="/assets/arrow-down.png" width={90 / 2} height={90 / 2} alt="Deslizar hacia abajo"/>
      </div>
    </div>
  );
}

export default Masthead;