import React, { useState } from 'react';
import Body from './main/components/body';
import Layout from './main/components/layout';
import '../styles/globals.css';

const sampleHashtags = ['survey', 'research', 'data', 'analysis'];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="container mx-auto py-8">
        <Body
          publisher="ACME Inc."
          heading="Survey on Consumer Preferences"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo at rhoncus bibendum, quam nunc convallis risus, in dictum turpis nibh a mauris."
          imageSrc="https://source.unsplash.com/random/800x600"
          forecastYears="Forecasts till 2025"
          hashtags={sampleHashtags}
          isDarkMode={isDarkMode}
        />
      </div>
    </Layout>
  );
};

export default App;
