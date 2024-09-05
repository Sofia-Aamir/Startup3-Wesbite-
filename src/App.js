import React from 'react';
import {HeroSection} from './Task 1/HeroSection'; // Import the HeroSection component
import { FreeSampleSection } from './Task 1/FreeSampleSection';
import { FeatureSection } from './Task 1/FeatureSection';
import { LoginSection } from './Task 1/LoginSection';
import { TestimonialSection } from './Task 1/TestimonialSection';
import { CallToActionSection } from './Task 1/CallToActionSection';
import { ShowcaseSection } from './Task 1/ShowcaseSection';
import { TeamSection } from './Task 1/TeamSection';
import { ContactSection } from './Task 1/ContactSection';
import { PricingSection } from './Task 1/PricingSection';
import { FooterSection } from './Task 1/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection /> {/* Include the HeroSection component here */}
      <FreeSampleSection/>
      <FeatureSection/>
      <LoginSection/>
      <TestimonialSection/>
      <CallToActionSection/>
      <ShowcaseSection/>
      <TeamSection/>
      <ContactSection/>
      <PricingSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
