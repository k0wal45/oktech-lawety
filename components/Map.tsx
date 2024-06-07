import React from 'react';

const Map = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-slate-950 pt-12 text-center text-white">
      <p className="max-w-2xl px-4 text-lg font-black uppercase tracking-widest text-primary">Skąd jesteśmy</p>
      <h4 className="max-w-2xl px-4 text-5xl font-bold leading-[1.3]">Wynajem Autolawety w Katowicach</h4>
      <p className="my-4 max-w-2xl px-4 text-xl leading-normal text-neutral-400 lg:text-2xl">
        Siedziba naszej firmy znajduje się w Katowicach, więc jeśli jesteś ze Śląska i z okolic lub akurat jesteś w
        okolicy. Zapraszamy do nas!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.7052445344966!2d19.011968!3d50.278762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cf2020ed1dbb%3A0xf8ab3318f2f05938!2sOktech%20-%20pomoc%20drogowa%2C%20autolaweta%2C%20laweta%20wynajem!5e0!3m2!1spl!2spl!4v1717768059884!5m2!1spl!2spl"
        width="1080"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[30rem] w-full"
      ></iframe>
    </section>
  );
};

export default Map;
