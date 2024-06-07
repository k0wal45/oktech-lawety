import React from 'react';
import TestimonialItem from './TestimonialItem';

const data = [
  {
    stars: 5,
    opinion:
      'Gorąco polecam. Laweta bardzo prosta w obsłudze. Kontakt z wynajmującym miły i bezproblemowy. Wszystko zostało dokładnie wytłumaczone więc nie miałam problemów z użytkowaniem lawety. Cena również konkurencyjna. Mam nadzieję że nie będę musiała więcej z niej korzystać:-) ale jeśli zajdzie jednak taka potrzeba, na pewno zgłoszę się do Oktech',
    name: 'Małgorzata Budzalewicz',
  },
];

export interface Opinion {
  stars: number;
  opinion: string;
  name: string;
}

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-slate-950 p-4 py-24 text-center text-white">
      <p className="max-w-2xl text-lg font-black uppercase tracking-widest text-primary">Opinie klientów</p>
      <h4 className="max-w-2xl text-5xl font-bold leading-[1.3]">Co ludzie o nas mówią?</h4>
      <p className="my-4 max-w-2xl text-xl leading-normal text-neutral-400 lg:text-2xl">
        Jesteśmy dumni z wysokiej jakości naszych usług oraz zadowolenia naszych klientów. Zobacz, co mówią o nas osoby,
        które skorzystały z wynajmu naszej lawety. Twoje zaufanie jest dla nas najważniejsze!
      </p>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
        {data.map((item: Opinion, index: number) => (
          <TestimonialItem stars={item.stars} name={item.name} opinion={item.opinion} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
