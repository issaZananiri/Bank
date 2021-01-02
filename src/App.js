import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Transactions from "./components/Transactions"
import Operations from "./components/Operations"
import Breakdown from "./components/Breakdown"
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  async getTransactions() {
    const response = await axios.get("http://localhost:3200/transactions")
    this.setState({ transactions: response.data })
  }

  async componentDidMount() {
    this.getTransactions()
  }

  async postTransaction(operation) {
    await axios.post("http://localhost:3200/transaction", operation)
    this.getTransactions()
  }

  async deleteTransaction(id) {
    await axios.delete("http://localhost:3200/transaction", { data: { id: id } })
    this.getTransactions()
  }


  balance = () => {
    let transactions = this.state.transactions
    console.log(transactions)
    let count = 0
    transactions.map(t => count += t.amount)
    return count
  }

  addToArray = (operation) => {
    this.postTransaction(operation)
  }

  deleteFromArray = (id) => {
    this.deleteTransaction(id)
  }


  render() {
    return (
      <Router>
        <div>
          <h1>Balance: ${this.balance()}</h1>
          <div className="main-links">
            <Link className="operations" to="/operations">Operations</Link>
            <Link className="transactions" to="/transactions">Transactions</Link>
            <Link className="breakdown" to="/breakdown">Breakdown</Link>
          </div>
          <Route path="/transactions" exact render={() => <Transactions transactions={this.state.transactions} deleteFromArray={this.deleteFromArray} />} />
          <Route path="/operations" exact render={() => <Operations transactions={this.state.transactions} addToArray={this.addToArray} />} />
          <Route path="/breakdown" exact render={() => <Breakdown transactions={this.state.transactions} />} />
        </div>
      </Router>)
  }

}

export default App;
