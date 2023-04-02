import React, {useState} from 'react';
import { formatAmountToNumber, formatAmountToString, countHours } from '../utils';

import './../Modal/modal.css'




const Modal = ({data, setModalActive, handleInvest}) => {

  const [inputValue, setInputValue] = useState('');
  const[error, setError] = useState(false);

  const handleError = (inputValue, currentValue) => {
    if (inputValue > currentValue) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleInputValue = (event) => {
    const { value } = event.target;
    const valueNumber = formatAmountToNumber(value);


    handleError(valueNumber, formatAmountToNumber(data.available))
    setInputValue(formatAmountToString(valueNumber));
  } 

  const addInvest = () => {
      handleInvest(data, formatAmountToNumber(inputValue));

      setInputValue('');
      setModalActive(false);
  }



  return (
    <div className='Overlay'>
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal-head'>
            <h3 className='modal-title'>Invest in Loan</h3>
            <div className='close-btn'>
                <i className="fa-solid fa-xmark" onClick={() => {
                  setModalActive(false)
                }}></i>
              </div>
          </div>
          <div className='modal-info'>
            <p className='modal-title'>Loan title: {data.title}</p>
            <p className='modal-available'>Available amount : <span>{`$${data.available}`}</span></p>
            <p className='modal-ends'>Loan ends in: {countHours(data.term_remaining)}</p>
          </div>
          <h4 className='modal-invest-heading'>Investment Amount</h4>
          <div className='modal-to-invest'>
            <input className='investment-amount' type={'text'} placeholder='1,000' value={inputValue} onChange={handleInputValue}></input>
            <button className='modal-invest-btn' type='button' onClick={addInvest} disabled={error || !inputValue}>Invest</button>
            {error && (<span>You can invest only {formatAmountToString(data.available)}</span>)}
          </div>

         
        </div>
      </div>
    </div>

  )
}


export default Modal;