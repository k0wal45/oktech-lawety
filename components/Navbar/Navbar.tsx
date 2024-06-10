'use client';
import Image from 'next/image';
import Link from 'next/link';
import BtnLink from '../reusable/BtnLink';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed z-20 flex w-full items-center justify-between bg-gradient-to-b from-neutral-900 p-6 text-white xl:px-36`}
    >
      <ul
        className={`fixed left-0 top-0 z-20 ${
          isOpen ? 'scale-x-100' : 'scale-x-0'
        } flex h-screen w-screen origin-right flex-col items-center justify-center gap-6 bg-black/80 p-4 text-center text-4xl font-bold transition-all duration-500`}
      >
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/cennik">Cennik</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/onas">O nas</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/regulamin">Regulamin</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/kontakt">Kontakt</Link>
        </li>
        <li>
          <BtnLink link="tel:+48533254426">Zadzwoń teraz: 533 25 44 26</BtnLink>
        </li>
      </ul>
      <Link
        href="/"
        className="duration-250 z-50 flex items-center justify-center gap-4 transition-all hover:scale-[1.1] active:scale-95"
      >
        <Image width={70} height={100} className="object-contain" src="/img/logo.png" alt="Oktech Logo" />
        <p className="hidden text-3xl font-black tracking-widest lg:block">OKTECH</p>
      </Link>

      <ul className="z-20 hidden items-center gap-8 text-lg font-bold tracking-wide lg:flex">
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/cennik">Cennik</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/onas">O nas</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/regulamin">Regulamin</Link>
        </li>
        <li className="duration-250 transition-all hover:scale-[1.1] active:scale-95">
          <Link href="/kontakt">Kontakt</Link>
        </li>
        <li>
          <BtnLink link="tel:+48533254426">Zadzwoń teraz: 533 25 44 26</BtnLink>
        </li>
      </ul>

      <div className="z-50 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Hamburger />
      </div>
    </motion.header>
  );
};

export default Navbar;
