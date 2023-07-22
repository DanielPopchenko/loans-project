import React from 'react';
import { useState } from 'react';
import Loan from './Loan';
import Modal from '../modal/Modal';
import { formatAmountToNumber, formatAmountToString } from '../../utils';

function LoansList({ onModalOpen, loans, setLoans, isModalOpen }) {
  const [modalData, setModalData] = useState(null);

  console.log('modalData: ', modalData);

  const handleInvest = (item, value) => {
    const newLoans = [...loans];

    const data = newLoans.map((loan) => {
      if (loan.id === item.id) {
        return {
          ...loan,
          available: formatAmountToString(formatAmountToNumber(loan.available) - value),
          invested: true,
        };
      } else {
        return loan;
      }
    });

    setLoans(data);
  };

  return (
    <ul style={{ listStyle: 'none', marginTop: '32px' }}>
      {loans.map((loan) => {
        return (
          <Loan key={`loan.id=${loan.id}`} loan={loan} onModalOpen={onModalOpen} setModalData={setModalData}></Loan>
        );
      })}

      {isModalOpen && <Modal data={modalData} onModalOpen={onModalOpen} handleInvest={handleInvest} />}
    </ul>
  );
}

export default LoansList;
