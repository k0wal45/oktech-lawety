import CallToContact from '@/components/CallToContact';
import FAQ from '@/components/FAQ/FAQ';
import HeroOffer from '@/components/Hero/HeroOffer';
import Panel from '@/components/Info/Panel';
import Offer from '@/components/Offer/Offer';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import CallToAction from '@/components/reusable/CallToAction';
import React from 'react';

const page = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <HeroOffer />
      <Panel />
      <Offer />
      <Services />
      <CallToAction
        header="Laweta czeka na ciebie"
        title="Skontaktuj się z nami już dziś i wynajmij lawetę szybko i bezproblemowo!"
        link="/kontakt"
        linkText="Zadzwoń Teraz"
      />
      <WhyUs />
      <FAQ />
      <CallToContact />
    </main>
  );
};

export default page;
