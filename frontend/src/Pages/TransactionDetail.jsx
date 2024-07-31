// TransactionDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionDetail = ({ match }) => {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios.get(`/api/transactions/${match.params.transaction_id}/`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error));
  }, [match.params.transaction_id]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div>
      <h1>Transaction Detail</h1>
      <p>Payer Name: {transaction.payer_name}</p>
      <p>Payer Email: {transaction.payer_email}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Status: {transaction.status}</p>
      <p>Payment Date: {transaction.payment_date}</p>
      <p>Payment Type: {transaction.payment_type}</p>
    </div>
  );
};

export default TransactionDetail;
