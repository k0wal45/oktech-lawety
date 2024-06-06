import Hero from '@/components/Hero/Hero';
import Panel from '@/components/Info/Panel';
import WhyUs from '@/components/WhyUs/WhyUs';

import CallToAction from '@/components/reusable/CallToAction';

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <Panel />
      <WhyUs />
      <CallToAction
        header="Laweta czeka na ciebie"
        title="Skontaktuj się z nami już dziś i wynajmij lawetę szybko i bezproblemowo!"
        link="/kontakt"
        linkText="Zadzwoń Teraz"
      />
    </main>
  );
}
