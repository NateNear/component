import React from 'react';
import Body from './main/components/body';
import "../styles/globals.css";
import Layout from './main/components/layout';
import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

const sampleHashtags = ['survey', 'research', 'data', 'analysis'];

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Layout>
          <div className="container py-8 w-full h-[561px] mr-0" id={theme}>
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
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
