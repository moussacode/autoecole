'use client'
import React from "react";
import CountUp from "react-countup";

export const NumberCounter = () => {
  return (
    <div className="w-full flex justify-center items-center bg-primary">
    <div className=" text-white py-12 ">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Accident de route</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={400}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Accident Moto</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Nombre de décés</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={1378}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Nombre de bléssés</p>
        </div>
      </div>
    </div>
    </div>
  );
};


