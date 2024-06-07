import CallToContact from '@/components/CallToContact';
import FAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/Hero/Hero';
import Panel from '@/components/Info/Panel';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
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
      <Services />
      <Testimonials />
      <FAQ />
      <CallToContact />
    </main>
  );
}
