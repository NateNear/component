import React from 'react';
import Survey from './main/Survey';
import "../styles/globals.css";

const sampleHashtags = ['survey', 'research', 'data', 'analysis'];

const App: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <Survey
        publisher="ACME Inc."
        heading="Survey on Consumer Preferences"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo at rhoncus bibendum, quam nunc convallis risus, in dictum turpis nibh a mauris."
        imageSrc="https://source.unsplash.com/random/800x600"
        forecastYears="Forecasts till 2025"
        hashtags={sampleHashtags}
      />
    </div>
  );
};

export default App;