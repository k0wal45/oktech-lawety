import FAQItem from './FAQItem';
import classes from '../backgrounds.module.css';
import Link from 'next/link';
import AppearFromLeft from '@/Animations/AppearFromLeft';
import AppearFromRight from '@/Animations/AppearFromRight';

const data = [
  {
    question: 'Jaka laweta jest w ofercie?',
    answer:
      'W ofercie dostępny jest Citroen Jumper, manualna skrzynia biegów, 3 osobowy, ładowność 1400kg, Długość najazdu 520cm',
  },
  {
    question: 'Czy jest możliwość otrzymania faktury?',
    answer: 'Jak najbardziej, wystawiamy faktury VAT, jeżeli klient tego wymaga',
  },
  {
    question: 'Jakie jest spalanie lawety?',
    answer: 'W zależności od prędkości, średnia w granicach 9L/100KM',
  },
  {
    question: 'Czy mogę jechać za granicę?',
    answer:
      'Tak, jak najbardziej naszą lawetą można jechać za granicę. Posiadamy odpowiednie ubezpieczenie oraz zieloną kartę.',
  },
  {
    question: 'Na jak długo mogę wypożyczyć lawetę',
    answer: 'W zależności od potrzeb od 3 godzin w górę.',
  },
  {
    question: 'Czy mogę jeździć lawetą z kategorią B?',
    answer: 'Jak najbardziej DMC autolawety do 3.5 tony, więc można nią jeździć z prawem jazdy kategorii B.',
  },
];

interface FAQElement {
  question: string;
  answer: string;
}

const directionOfAppear = (index: number, item: FAQElement) => {
  if (index % 2 === 0) {
    return (
      <AppearFromLeft key={index}>
        <FAQItem question={item.question} answer={item.answer} />
      </AppearFromLeft>
    );
  }

  return (
    <AppearFromRight key={index}>
      <FAQItem question={item.question} answer={item.answer} />
    </AppearFromRight>
  );
};
const FAQ = () => {
  return (
    <section
      className={classes.bgCircles + ' flex flex-col items-center justify-center gap-8 bg-fixed p-4 py-24 text-center'}
    >
      <p className="max-w-3xl text-lg font-black uppercase tracking-widest text-neutral-600">faq</p>
      <h4 className="max-w-3xl text-5xl font-bold leading-[1.3]">Odpowiedzi na często zadawane pytania</h4>
      <p className="my-4 max-w-3xl text-xl leading-normal text-neutral-600 lg:text-2xl">
        Zebraliśmy najczęściej zadawane pytania od naszych klientów, aby zapewnić Ci szybkie i jasne odpowiedzi na
        wszystkie wątpliwości.
      </p>
      <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((item: FAQElement, index: number) => directionOfAppear(index, item))}
      </div>

      <p className="text-2xl">
        Nie znalazłeś odpowiedzi na pytanie?{' '}
        <Link href="/kontakt" className="text-accent underline">
          Skontaktuj się teraz
        </Link>
      </p>
    </section>
  );
};

export default FAQ;
