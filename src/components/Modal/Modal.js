import React, { Component } from "react";
import "./Modal.css";

import { countHours } from "../utils/utils";

export default class Modal extends Component {
  render() {
    const { title, amount, remaining, onOpenModalClick } = this.props;
    return (
      <div className="modal">
        <div className="modalContent">
          <h2>Invest in loan</h2>
          <p>{title}</p>
          <p>Amount available: ${amount}</p>
          <p>Loan ends in: {countHours(remaining)}</p>
          <button type="button" onClick={onOpenModalClick}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
