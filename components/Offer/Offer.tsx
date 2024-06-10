import React from 'react';
import BtnLink from '../reusable/BtnLink';

const Offer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-white bg-fixed p-4 py-16 text-center">
      <p className="max-w-5xl text-lg font-black uppercase tracking-widest text-neutral-600">Oferta</p>
      <h4 className="max-w-5xl text-5xl font-bold leading-[1.3]">Oferta Wynajmu Autolawety</h4>
      <ul className="grid max-w-4xl grid-cols-2 text-2xl font-bold">
        <li className="border-2 border-b-0 border-r-0 border-black p-4">3 godziny</li>
        <li className="border-2 border-b-0 border-black p-4">200zł netto</li>
        <li className="border-2 border-b-0 border-r-0 border-black p-4">6 godzin</li>
        <li className="border-2 border-b-0 border-black p-4">270zł netto</li>
        <li className="border-2 border-r-0 border-black p-4">1-3 doby</li>
        <li className="border-2 border-black p-4">350zł netto za dobę</li>
      </ul>
      <p className="font-neutral-700 max-w-5xl text-xl">
        Dobowy limit kilometrów to 1000 km Płatność przelewem przynajmniej jakaś część w celu weryfikacji kierowcy. Dwa
        dokumenty tożsamości
      </p>
      <p className="text-3xl font-bold">Kaucja zwrotna 1000zł</p>
      <BtnLink link="/kontakt">Skontaktuj się już Teraz</BtnLink>
    </section>
  );
};

export default Offer;
