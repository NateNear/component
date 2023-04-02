import React from 'react';
import Body from './main/components/body';
import "../styles/globals.css";
import Layout from './main/components/layout';

const sampleHashtags = ['survey', 'research', 'data', 'analysis'];


const App: React.FC = () => {
  return (
    <Layout>
    <div className="container mx-auto py-8">
      <Body
        publisher="ACME Inc."
        heading="Survey on Consumer Preferences"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo at rhoncus bibendum, quam nunc convallis risus, in dictum turpis nibh a mauris."
        imageSrc="https://source.unsplash.com/random/800x600"
        forecastYears="Forecasts till 2025"
        hashtags={sampleHashtags}
      />
    </div>
    </Layout>
  );
};

export default App;