'use client';
import Link from 'next/link';

const BtnLink = ({ link, children }: { link: string; children?: React.ReactNode }) => {
  return (
    <Link
      href={link}
      className="grid place-items-center rounded-xl bg-primary p-[12px] px-6 text-center text-xl font-semibold text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
    >
      {children}
    </Link>
  );
};

export default BtnLink;
