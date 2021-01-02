import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: null,
            vendor: null,
            category: null
        }
        this.handleInput = this.handleInput.bind(this)
    }
    async handleInput(e) {
        let name = e.target.name
        let value = e.target.value
        if (name === "amount") {
            value = Number(value)
        }
        await this.setState({
            [name]: value
        })
    }
    deposit = () => {
        this.props.addToArray(this.state)
    }

    withdraw = () => {
        let transactions = { ...this.state }
        transactions.amount = parseInt(transactions.amount, 10) * -1
        this.props.addToArray(transactions)
    }

    render() {
        return (<div id="container">
            <h2>Operations</h2>
            <input id="amount" name="amount" type="number" placeholder="Amount" onChange={this.handleInput}></input><br></br>
            <input id="vendor" name="vendor" type="text" placeholder="Vendor" onChange={this.handleInput}></input><br></br>
            <input id="category" name="category" type="text" placeholder="Category" onChange={this.handleInput}></input><br></br>
            <Link to="/transactions">
            <button id="withdraw" variant="contained" color="secondary" onClick={this.withdraw}>Withdraw</button>
            <button id="deposit" onClick={this.deposit}>Deposit</button></Link>
        </div>)
    }
}



export default Operations;