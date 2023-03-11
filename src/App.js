import React, { Component } from "react";
import styled from "styled-components";
import "./css/base.css";
import loans from "./current-loans.json";
import LoansList from "./components/LoansList/LoansList";

const Section = styled.section`
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;

  margin-bottom: 32px;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Section>
          <header className="header">
            <h2 className="sectionTitle">Current Loans</h2>
          </header>
        </Section>

        <Section>
          <LoansList {...loans} />
        </Section>
      </div>
    );
  }
}
