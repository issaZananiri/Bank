import React, { Component } from 'react';
import Transaction from "./Transaction"

class Transactions extends Component{

render(){
    let transactions = this.props.transactions
    return (<div>
        <h2>Transactions</h2>
        {transactions.map(t => <Transaction key={transactions.indexOf(t)} 
        transaction={t} 
        transactions={transactions} deleteFromArray={this.props.deleteFromArray} />)}
    </div>)
}


}




export default Transactions;