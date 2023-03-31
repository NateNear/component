import React from 'react';
import { css } from '@emotion/css';

const Header: React.FC = () => {
  return (
    <header
      className={css`
        background-color: #fff;
        border-bottom: 1px solid #e2e8f0;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
      `}
    >
      <div
        className={css`
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a202c;
        `}
      >
        Caselets
      </div>
      <nav
        className={css`
          display: flex;
        `}
      >
        <a
          href="#"
          className={css`
            margin-right: 1.5rem;
            font-size: 1rem;
            font-weight: 500;
            color: #4a5568;
            text-decoration: none;
            &:hover {
              color: #1a202c;
            }
          `}
        >
          Home
        </a>
        <a
          href="#"
          className={css`
            font-size: 1rem;
            font-weight: 500;
            color: #4a5568;
            text-decoration: none;
            &:hover {
              color: #1a202c;
            }
          `}
        >
          Stats
        </a>
      </nav>
    </header>
  );
};

export default Header;
