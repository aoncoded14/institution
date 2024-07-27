// App.js

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={TransactionList} />
      <Route path="/transactions/:transaction_id" component={TransactionDetail} />
    </Switch>
  </Router>
);

export default App;
