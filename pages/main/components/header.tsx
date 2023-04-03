import React from 'react'

import styled from '@emotion/styled'

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;`


const CaseletDiv = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;`

const StyledNav = styled.nav`
  display:flex;`

const StyledAnchor = styled.a`
  margin-right: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  text-decoration: none;
  &:hover {
    color: #1a202c;
  }`

const StyledAnchor2 = styled.a`
font-size: 1rem;
font-weight: 500;
color: #4a5568;
text-decoration: none;
&:hover {
  color: #1a202c;
} `



const Header: React.FC = () => {
  return (
    <StyledHeader>

      <CaseletDiv>
        Caselets
      </CaseletDiv>

      <StyledNav>
        <StyledAnchor href='#'>
          Home
        </StyledAnchor>

        <StyledAnchor2 href='#'>
          Stats
        </StyledAnchor2>


      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
