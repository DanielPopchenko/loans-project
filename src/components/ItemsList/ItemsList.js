import React, { useState } from 'react';
import Item from '../Item/index';
import { formatAmountToNumber, formatAmountToString } from '../utils';

import Modal from './../Modal/index';
import './../Modal/modal.css';

const ItemsList = ({ setLoans, loans }) => {
  const [modalData, setModalData] = useState(null);
  const [modalActive, setModalActive] = useState(false);

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
    <div className="loans-container">
      <ul className="loans-list">
        {loans.map((elem) => {
          return (
            <Item
              key={elem.id}
              elem={elem}
              setModalData={setModalData}
              setModalActive={setModalActive}
            />
          );
        })}
      </ul>
      {modalActive && (
        <Modal
          data={modalData}
          setModalActive={setModalActive}
          handleInvest={handleInvest}
        />
      )}
    </div>
  );
};

export default ItemsList;
