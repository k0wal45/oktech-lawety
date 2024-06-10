import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-8 text-center text-white">
        <h1 className="text-5xl font-bold">
          Regulamin będzie dostępny wkrótce. Skontaktuj telefonicznie lub mailowo po więcej szczegółów.
        </h1>
        <div className="flex gap-8">
          <Link
            href="/kontakt"
            className="rounded-md bg-primary p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
          >
            Zadzwoń Teraz
          </Link>
          <Link
            href="/"
            className="rounded-md bg-white p-4 px-6 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
          >
            Strona Główna
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
