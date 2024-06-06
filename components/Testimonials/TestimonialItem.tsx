import React from 'react';
import { Opinion } from './Testimonials';
import { FaStar } from 'react-icons/fa';

const TestimonialItem = ({ stars, opinion, name }: Opinion) => {
  const rating = [];

  for (let i = 1; i <= stars; i++) {
    rating.push(<FaStar key={i} />);
  }

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded-xl bg-white p-8 text-start lg:w-[23rem]">
      <div className="flex gap-[4px] text-2xl text-primary">{rating}</div>
      <p className="text-lg text-neutral-600">{opinion}</p>
      <p className="text-xl font-bold text-black">{name}</p>
    </div>
  );
};

export default TestimonialItem;
