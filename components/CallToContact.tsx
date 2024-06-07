import Link from 'next/link';
import classes from './backgrounds.module.css';

const CallToContact = () => {
  return (
    <div
      className={
        classes.bgGradient +
        ' flex flex-col items-center justify-around gap-12 p-4 py-12 text-center lg:flex-row lg:text-start'
      }
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <h6 className="text-5xl font-bold">Potrzebujesz wynająć lawetę?</h6>
        <p className="text-2xl text-neutral-700">Skontaktuj się już teraz i wynajmij lawetę u nas!</p>
      </div>

      <Link
        href="/kontakt"
        className="rounded-md bg-black p-4 px-6 font-semibold text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#333] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
      >
        Zadzwoń Teraz
      </Link>
    </div>
  );
};

export default CallToContact;
