import Link from 'next/link';
import Slideshow from './SlideShow';
import { FaClock } from 'react-icons/fa';
import AppearFromLeft from '@/Animations/AppearFromLeft';
import Reveal from '@/Animations/Reveal';

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center p-4 pt-24 text-white lg:pt-4">
      <Slideshow />
      <Reveal>
        <div className="my-12 flex w-full max-w-6xl flex-col items-start justify-center gap-8">
          <p className="text-xl font-black uppercase tracking-[10px] text-primary">wypożycz lawetę</p>
          <h1 className="text-5xl font-semibold leading-[1.3] lg:max-w-[70%] lg:text-7xl">
            Wypożyczalnia Lawet - Szybko, Bezpiecznie, Niezawodnie
          </h1>
          <p className="text-xl font-medium leading-normal text-neutral-300 lg:max-w-[70%] lg:text-2xl">
            Potrzebujesz lawety na już? Nasza wypożyczalnia zapewnia szybki i łatwy wynajem lawety na każdą okazję.
            Sprawdź nasze oferty!
          </p>
          <div className="flex gap-8">
            <Link
              href="/kontakt"
              className="rounded-md bg-primary p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
            >
              Zadzwoń Teraz
            </Link>
            <Link
              href="/cennik"
              className="rounded-md bg-white p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
            >
              Sprawdź Ofertę
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xl text-accent">
              <FaClock />
            </p>
            <p>Dostępne 7 dni w tygodniu</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
