// TransactionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions/')
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.transaction_id}>
            <Link to={`/transactions/${transaction.transaction_id}`}>
              {transaction.payer_name} - {transaction.amount} - {transaction.status}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
