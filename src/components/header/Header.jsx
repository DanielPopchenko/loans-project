import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Current Loans</h1> <br />
    </header>
  );
}

export default Header;
