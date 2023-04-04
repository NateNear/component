import { ReactNode, useState } from 'react';
import Header from './header';

type LayoutProps = {
  children: ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
      <main style={{ backgroundColor: isDarkMode ? '#000' : '#fff' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
