import React from 'react';
import {HeroSection} from './Task 1/HeroSection'; // Import the HeroSection component
import { NewSection } from './Task 1/HeroSection';
import { FeatureSection } from './Task 1/HeroSection';


function App() {
  return (
    <div className="App">
      <HeroSection /> {/* Include the HeroSection component here */}
      <NewSection/>
      <FeatureSection/>
    </div>
  );
}

export default App;
