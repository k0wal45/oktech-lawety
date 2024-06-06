import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-6 text-white lg:px-36">
      <Link href="/" className="flex items-center justify-center gap-4">
        <Image width={70} height={100} className="object-contain" src="/img/logo.png" alt="Oktech Logo" />
        <p className="hidden text-3xl font-black tracking-wider lg:block">OKTECH</p>
      </Link>

      <ul className="hidden items-center gap-8 text-lg font-black tracking-wide lg:flex">
        <li>
          <Link href="/">Cennik</Link>
        </li>
        <li>
          <Link href="/">O nas</Link>
        </li>
        <li>
          <Link href="/">Regulamin</Link>
        </li>
        <li>
          <Link href="/">Kontakt</Link>
        </li>
        <li>
          <a
            href="tel:+48533254426"
            className="whitespace-nowrap rounded-xl bg-primary p-[0.7rem] px-4 text-lg font-black text-black"
          >
            Zadzwoń teraz: 533 25 44 26
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
