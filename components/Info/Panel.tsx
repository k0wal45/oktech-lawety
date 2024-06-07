import { FaClock, FaPhoneAlt, FaRegCheckCircle } from 'react-icons/fa';
import classes from '../backgrounds.module.css';
import AppearFromLeft from '@/Animations/AppearFromLeft';
import AppearFromBottom from '@/Animations/AppearFromBottom';
import AppearFromRight from '@/Animations/AppearFromRight';

const Panel = () => {
  return (
    <section
      className={
        classes.bgGradient +
        ' flex min-h-[15vh] w-full flex-col items-center justify-around gap-12 overflow-y-hidden p-4 px-4 py-12 text-neutral-900 lg:flex-row lg:py-4 2xl:px-64'
      }
    >
      <AppearFromLeft>
        <div className="flex items-center justify-center gap-4">
          <p className="aspect-square rounded-full bg-neutral-900 p-4 text-3xl text-primary">
            <FaPhoneAlt />
          </p>
          <p className="whitespace-nowrap text-3xl font-bold">533 25 44 26</p>
        </div>
      </AppearFromLeft>
      <AppearFromBottom>
        <div className="flex items-center justify-center gap-4">
          <p className="aspect-square rounded-full bg-neutral-900 p-4 text-3xl text-white">
            <FaClock />
          </p>
          <p className="text-3xl font-bold">Dostępna od zaraz</p>
        </div>
      </AppearFromBottom>
      <AppearFromRight>
        <div className="flex items-center justify-center gap-4">
          <p className="aspect-square rounded-full bg-white p-4 text-3xl text-neutral-900">
            <FaRegCheckCircle />
          </p>
          <p className="text-3xl font-bold">Bez ukrytych opłat</p>
        </div>
      </AppearFromRight>
    </section>
  );
};

export default Panel;
