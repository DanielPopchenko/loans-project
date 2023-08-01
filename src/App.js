import React, { useState, useEffect } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';
import LoansList from './components/loans/LoansList';
import { formatAmountToNumber } from './utils/index';

import { LoanContext } from './context/LoanContext';

import data from './current-loans.json';
import './index.css';

function App() {
  const [loans, setLoans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoans(data.loans);
  }, []);

  const totalAmount = loans.reduce((acc, loan) => {
    const available = formatAmountToNumber(loan.available);
    return acc + available;
  }, 0);

  const onModalOpen = (e) => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <LoanContext.Provider value={{ loans, setLoans }}>
      <div className="App">
        <Header />
        <hr />
        <Container>
          <LoansList onModalOpen={onModalOpen} isModalOpen={isModalOpen}></LoansList>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginTop: 60,
            }}
          >
            Total amount available for investment:
            {<span style={{ marginLeft: 250 }}>${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>}
          </p>
        </Container>
      </div>
    </LoanContext.Provider>
  );
}

export default App;
