import React, { Component } from "react";
import "./LoansList.css";
import Modal from "../Modal/Modal";

export default class LoansList extends Component {
  state = { openModal: false };

  handleOpenModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render() {
    const { openModal } = this.state;
    const loans = this.props.loans;

    return (
      <ul className="loansList">
        {loans.map((loan) => {
          // const { id, title, amount, term_remaining } = loan;

          return (
            <li className="loansList-item" key={loan.id}>
              <div style={{ maxWidth: 224 }}>
                <h2 className="loansList-title">Loan name</h2>
                <p className="loansList-text">Loan details and values</p>
              </div>
              <button
                className="loansList-btn"
                type="button"
                onClick={this.handleOpenModal}
              >
                INVEST
              </button>

              {openModal && (
                <Modal
                  title={loan.title}
                  amount={loan.amount}
                  remaining={loan.term_remaining}
                  onOpenModalClick={this.handleOpenModal}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}
