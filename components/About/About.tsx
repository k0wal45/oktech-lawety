import React from 'react';
import AboutItem from './AboutItem';
import { FaCar, FaClock, FaSuitcase } from 'react-icons/fa';
const data = [
  {
    title: 'Nowoczesna i Wydajna Autolaweta',
    text: 'Nasza autolaweta jest wyposażona w najnowsze technologie, zapewniając niezawodność i bezpieczeństwo podczas transportu pojazdów.',
    icon: <FaCar />,
  },
  {
    title: 'Profesjonalizm i Doświadczenie',
    text: 'Posiadamy doświadczenie w branży wynajmu autolawet, co przekłada się na wysoki poziom profesjonalizmu i zadowolenia klientów.',
    icon: <FaSuitcase />,
  },
  {
    title: 'Dostępność 24h, 7 dni w tygodniu',
    text: 'Jesteśmy do Twojej dyspozycji o każdej porze dnia i nocy. Niezależnie od tego, kiedy potrzebujesz naszej pomocy, możesz na nas liczyć.',
    icon: <FaClock />,
  },
];

export interface AboutType {
  title: string;
  text: string;
  icon: JSX.Element;
}

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-white p-4 py-24 text-center">
      <p className="max-w-2xl text-lg font-black uppercase tracking-widest text-primary">o nas</p>
      <h4 className="max-w-2xl text-5xl font-bold leading-[1.3]">Co nas wyróżnia?</h4>
      <p className="my-4 max-w-2xl text-xl leading-normal text-neutral-400 lg:text-2xl">
        Nasza firma wyróżnia się na tle konkurencji dzięki zaangażowaniu w najwyższą jakość usług, nowoczesnym
        rozwiązaniom technologicznym oraz indywidualnemu podejściu do każdego klienta.
      </p>
      <div className="flex flex-wrap gap-12">
        {data.map((item: AboutType, index: number) => (
          <AboutItem text={item.text} title={item.title} icon={item.icon} key={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
