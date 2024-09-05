import React from 'react';
import {HeroSection} from './Task 1/HeroSection'; // Import the HeroSection component
import { NewSection } from './Task 1/HeroSection';
import { FeatureSection } from './Task 1/HeroSection';
import { LoginSection } from './Task 1/HeroSection';
import { TestimonialSection } from './Task 1/HeroSection';
import { CallToActionSection } from './Task 1/HeroSection';
import { ShowcaseSection } from './Task 1/HeroSection';
import { TeamSection } from './Task 1/HeroSection';
import { ContactSection } from './Task 1/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection /> {/* Include the HeroSection component here */}
      <NewSection/>
      <FeatureSection/>
      <LoginSection/>
      <TestimonialSection/>
      <CallToActionSection/>
      <ShowcaseSection/>
      <TeamSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
