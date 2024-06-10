import About from '@/components/About/About';
import FAQ from '@/components/FAQ/FAQ';
import HeroContact from '@/components/Hero/HeroContact';
import Panel from '@/components/Info/Panel';
import Offer from '@/components/Offer/Offer';
import Testimonials from '@/components/Testimonials/Testimonials';
import WhyUs from '@/components/WhyUs/WhyUs';
import React from 'react';

const page = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <HeroContact />
      <Panel />
      <Offer />
      <WhyUs />
      <About />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default page;
