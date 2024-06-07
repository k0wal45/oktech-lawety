import About from '@/components/About/About';
import CallToContact from '@/components/CallToContact';
import FAQ from '@/components/FAQ/FAQ';
import HeroAbout from '@/components/Hero/HeroAbout';
import Panel from '@/components/Info/Panel';
import Map from '@/components/Map';
import WhyUs from '@/components/WhyUs/WhyUs';
import React from 'react';

const page = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <HeroAbout />
      <Panel />
      <About />
      <CallToContact />
      <WhyUs />
      <Map />
      <FAQ />
    </main>
  );
};

export default page;
