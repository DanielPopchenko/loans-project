import React from 'react';

import styles from './Loan.module.css';

function Loan({ loan, onModalOpen, setModalData }) {
  return (
    <>
      <li className={loan.invested ? `${styles.item} ${styles.investedInItem}` : styles.item}>
        <div className={styles.firstGroup}>
          <h2 className={styles.itemTitle}>{loan.title}</h2>
          <p>Loan details and values</p>
        </div>
        {/* <span className={loan.invested ? styles.isInvested : ''}>{loan.invested ? 'Invested' : ''}</span> */}
        <br />
        <div className={styles.secondGroup}>
          <button
            type="button"
            className={styles.loanBtn}
            onClick={() => {
              onModalOpen(true);
              setModalData(loan);
            }}
          >
            INVEST
          </button>
        </div>
      </li>
    </>
  );
}

export default Loan;
