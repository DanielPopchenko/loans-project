import React, { useState, useEffect, useRef } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';
import LoansList from './components/loans/LoansList';
import { formatAmountToNumber } from './utils/index';
import { formatAmountToString } from './utils/index';

import data from './current-loans.json';
import './index.css';

function App() {
  const [loans, setLoans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [availableToInvest, setAvailableToInvest] = useState(10);

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
    <div className="App">
      <Header />
      <hr />
      <Container>
        <LoansList onModalOpen={onModalOpen} loans={loans} setLoans={setLoans} isModalOpen={isModalOpen}></LoansList>
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
  );
}

export default App;
