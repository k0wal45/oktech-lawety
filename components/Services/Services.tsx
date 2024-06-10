import { FaCalendarAlt, FaClock, FaLifeRing, FaPhoneAlt, FaTag } from 'react-icons/fa';
import classes from '../backgrounds.module.css';

const Services = () => {
  return (
    <section
      className={classes.bgDotted + ' flex flex-col items-center justify-center gap-6 bg-fixed p-4 py-24 text-center'}
    >
      <p className="max-w-5xl text-lg font-black uppercase tracking-widest text-neutral-600">Nasze usługi</p>
      <h4 className="max-w-5xl text-5xl font-bold leading-[1.3]">Wynajem autolawety w Katowicach i na Śląsku</h4>
      <p className="my-4 max-w-5xl text-xl leading-normal text-neutral-600 lg:text-2xl">
        Zapewniamy szeroki zakres usług związanych z wynajmem autolawety, dostosowanych do Twoich potrzeb. Oferujemy
        profesjonalne i niezawodne rozwiązania, które gwarantują bezpieczny i szybki transport pojazdów.
      </p>
      <div className="grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-6">
        {/* card */}

        <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-white p-10 text-start shadow-lg lg:col-span-3">
          <div className="text-6xl text-primary">
            <FaClock />
          </div>
          <p className="text-2xl font-bold">Wynajem Autolawety na Krótki i Długi Okres</p>
          <p className="text-xl text-neutral-600">
            Oferujemy wynajem autolawety zarówno na krótkie, jak i długie okresy. Niezależnie od Twoich potrzeb, mamy
            elastyczne opcje wynajmu.
          </p>
        </div>

        {/* card */}

        <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-primary p-10 text-start shadow-lg lg:col-span-3">
          <div className="text-6xl">
            <FaPhoneAlt />
          </div>
          <p className="text-2xl font-bold">Całodobowy Wynajem Autolawety</p>
          <p className="text-xl text-neutral-600">
            Nasze usługi wynajmu autolawety są dostępne 24/7, aby zapewnić Ci pomoc w każdej sytuacji, niezależnie od
            pory dnia.
          </p>
        </div>

        {/* card */}

        <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-primary p-10 text-start shadow-lg lg:col-span-2">
          <div className="text-6xl">
            <FaLifeRing />
          </div>
          <p className="text-2xl font-bold">Profesjonalna Pomoc Drogowa</p>
          <p className="text-xl text-neutral-600">
            Nasza ekipa jest gotowa, aby zapewnić Ci profesjonalną pomoc drogową. Skontaktuj się z nami, gdy
            potrzebujesz wsparcia na drodze.
          </p>
        </div>

        {/* card */}

        <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-white p-10 text-start shadow-lg lg:col-span-2">
          <div className="text-6xl text-primary">
            <FaCalendarAlt />
          </div>
          <p className="text-2xl font-bold">Elastyczne Godziny Wynajmu</p>
          <p className="text-xl text-neutral-600">
            Oferujemy elastyczne godziny wynajmu, aby dopasować się do Twojego harmonogramu. Możesz wynająć autolawetę
            na tyle czasu, ile potrzebujesz.
          </p>
        </div>

        {/* card */}

        <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-white p-10 text-start shadow-lg lg:col-span-2">
          <div className="text-6xl text-primary">
            <FaTag />
          </div>
          <p className="text-2xl font-bold">Atrakcyjne Ceny i Promocje</p>
          <p className="text-xl text-neutral-600">
            Nasze ceny są konkurencyjne i oferujemy różne promocje, aby zapewnić Ci najlepszą ofertę na rynku."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
