import Image from 'next/image';
import Form from '../Contact/ContactForm';
import classes from '../backgrounds.module.css';

const HeroContact = () => {
  return (
    <section
      className={
        classes.bgTriangle +
        ' relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-y-hidden p-4 py-36 text-center'
      }
    >
      <p className="max-w-5xl text-lg font-black uppercase tracking-widest text-primary">Kontakt</p>
      <h4 className="max-w-5xl text-7xl font-semibold leading-[1.3]">Skontaktuj się z nami</h4>
      <div className="flex overflow-hidden rounded-xl">
        <Form />
        <Image
          width={800}
          height={1000}
          src="/img/laweta4.JPEG"
          alt="Autolaweta Katowice"
          className="max-w-2xl flex-1 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroContact;
