import Image from 'next/image';
import React from 'react';

const HeroOffer = () => {
  return (
    <section className="relative flex flex-col items-center gap-4 py-40 text-center text-white">
      <h1 className="border-b-2 border-primary p-4 text-6xl font-bold">Cennik wynajmu</h1>
      <p className="text-2xl text-neutral-200">Jakie są ceny wynajmu autolawety?</p>
      <Image
        width={1080}
        height={600}
        src="/img/laweta1.JPEG"
        alt="Zdjęcie lawety"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover brightness-50"
      />
    </section>
  );
};

export default HeroOffer;
