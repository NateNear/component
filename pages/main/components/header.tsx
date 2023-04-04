import React, { useContext } from 'react';
import { ThemeContext } from '../../_app';
import styled from '@emotion/styled';
import ReactSwitch from "react-switch";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => (theme === 'dark' ? '#202024' : '#fff')};
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
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1a202c')};
`;

const StyledNav = styled.nav`
  display:flex;
`;

const StyledAnchor = styled.a`
  margin-right: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#4a5568')};
  text-decoration: none;
  &:hover {
    color: #1a202c;
  }
`;

const StyledAnchor2 = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#4a5568')};
  text-decoration: none;
  &:hover {
    color: #1a202c;
  }
`;

const StyledSwitchWrapper = styled.div`
  margin-left: 2rem;
`;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader theme={theme}>
      <CaseletDiv theme={theme}>Caselets</CaseletDiv>
      <StyledNav>
        <StyledAnchor theme={theme} href='#'>Home</StyledAnchor>
        <StyledAnchor2 theme={theme} href='#'>Stats</StyledAnchor2>
        <StyledSwitchWrapper>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </StyledSwitchWrapper>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
