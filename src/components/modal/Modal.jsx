import React, { useState } from 'react';
import styles from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { formatAmountToNumber, formatAmountToString, countHours } from '../../utils';
import Swal from 'sweetalert2';

function Modal({ data, onModalOpen, handleInvest }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleError = (inputValue, currAvailableValue) => {
    if (inputValue > currAvailableValue || inputValue === 0) {
      setError(true);
      // return;
    } else if (isNaN(inputValue)) {
      setInputValue('');
      Swal.fire({
        title: 'Error!',
        text: 'Enter a number!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    } else {
      setError(false);
    }
  };

  const addInvest = () => {
    handleInvest(data, formatAmountToNumber(inputValue));
    setInputValue('');
    onModalOpen();
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully invested in a loan',
      icon: 'success',
      confirmButtonText: 'Cool',
      footer: `<footer><p>Amount invested: ${inputValue}</p></footer>`,
    });
  };

  const handleValueChange = (event) => {
    const { value } = event.target;
    const valueNumber = formatAmountToNumber(value);

    setInputValue(formatAmountToString(valueNumber));
    handleError(valueNumber, formatAmountToNumber(data.available));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvest();
  };

  return (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.closeBtn} onClick={() => onModalOpen()}>
            <RxCross1 style={{ cursor: 'pointer', padding: 2, fontSize: 30 }} />
          </span>
          <h2 className={styles.modalTitle}>Invest in loan</h2>
          <p className={styles.loanTitle}>{data.title}</p>
          <p className={styles.amountAvailable}>Amount available: ${data.available}</p>
          <p className={styles.endsIn}>Loan ends in: {countHours(data.term_remaining)}</p>
          <div className={styles.invest}>
            <h3>Investment amount</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                className={styles.inputEl}
                value={inputValue}
                placeholder="1.000"
                onChange={handleValueChange}
              />
              <button type="submit" disabled={error || !inputValue}>
                INVEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
