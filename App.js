import React, { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/ItemsList.css';
import './styles/Item.css';
import ItemsList from './components/ItemsList';
import data from './current-loans.json';
import { formatAmountToNumber } from './components/utils/index';

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    setLoans(data.loans);
  }, []);

  const totalAmount = loans.reduce((acc, i) => {
    const available = formatAmountToNumber(i.available);

    return acc + available;
  }, 0);

  return (
    <div className="App">
      <h1 className="App-heading">Our loans</h1>
      <hr></hr>
      <ItemsList setLoans={setLoans} loans={loans} />
      <p className="App-total">
        Total amount available for investment: <span>${totalAmount.toFixed(3)}</span>
      </p>
    </div>
  );
}

export default App;
