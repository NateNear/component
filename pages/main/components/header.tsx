import { useState } from 'react';
import styled from '@emotion/styled';

type HeaderProps = {
  toggleDarkMode: () => void;
};

const StyledHeader = styled.header<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border-bottom: 1px solid #e2e8f0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const CaseletDiv = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: inherit;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledAnchor = styled.a`
  margin-right: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #718096;
  }
`;

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Header = ({ toggleDarkMode }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <CaseletDiv>Caselets</CaseletDiv>
      <StyledNav>
        <StyledAnchor href="#">Home</StyledAnchor>
        <StyledButton onClick={handleToggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </StyledButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
