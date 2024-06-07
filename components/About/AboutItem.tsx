import React from 'react';
import { FaTags } from 'react-icons/fa';
import { AboutType } from './About';

const AboutItem = ({ title, text, icon }: AboutType) => {
  return (
    <div className="group flex w-[23rem] flex-col items-center justify-center gap-4 rounded-xl bg-neutral-200 p-8">
      <div className="even: aspect-square rounded-full bg-black p-4 text-5xl text-primary group-even:bg-primary group-even:text-black">
        {icon}
      </div>
      <p className="text-3xl font-bold">{title}</p>

      <p className="text-lg text-neutral-700">{text}</p>
    </div>
  );
};

export default AboutItem;
