import React from 'react';
// import Modal from './../Modal/index'

const Item = ({ elem, setModalData, setModalActive }) => {
  return (
    <div>
      <li className="loans-item">
        <div className="loan-content">
          <div className="loan-info">
            <h2>{elem.title}</h2>
            <p>Loan details and values</p>
          </div>
          {elem.invested && <span>Invested</span>}
          <button
            type="button"
            className="loan-btn"
            onClick={() => {
              setModalData(elem);
              setModalActive(true);
            }}
          >
            INVEST
          </button>
        </div>
        {/* <div className="invested">Invested</div> */}
      </li>
    </div>
  );
};

export default Item;
