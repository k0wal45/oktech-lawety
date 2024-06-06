import AppearFromBottom from '@/Animations/AppearFromBottom';
import AppearFromLeft from '@/Animations/AppearFromLeft';
import AppearFromRight from '@/Animations/AppearFromRight';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CallToAction = ({
  header,
  title,
  link,
  linkText,
}: {
  header: string;
  title: string;
  link: string;
  linkText: string;
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 overflow-y-hidden px-4 py-16 text-center text-white lg:px-36">
      <Image
        width={1080}
        height={800}
        src="/img/laweta2.jpg"
        alt="Laweta zdjęcie"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover brightness-50"
      />
      <AppearFromLeft>
        <p className="text-lg font-black uppercase tracking-widest text-primary">{header}</p>
      </AppearFromLeft>
      <AppearFromRight>
        <h3 className="max-w-4xl text-5xl font-bold leading-[1.3]">{title}</h3>
      </AppearFromRight>
      <AppearFromBottom>
        <Link
          href={link}
          className="rounded-md bg-white p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
        >
          {linkText}
        </Link>
      </AppearFromBottom>
    </section>
  );
};

export default CallToAction;
