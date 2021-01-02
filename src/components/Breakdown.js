import React, { Component } from 'react';

class Breakdown extends Component {
    breakDown(transactions){
        let categories = {}
        transactions.forEach(t => Object.keys(categories).includes(t.category)
        ? categories[t.category] += t.amount
        : categories[t.category] = t.amount)
        return categories
      }

    render(){
        let transactions = this.props.transactions
        let breaking = this.breakDown(transactions)
        let categotyName = Object.keys(breaking)
        return (
            <div>
                <h2>Breakdown</h2>
                {categotyName.map(n => (<div>
                    {n}: ${breaking[n]}
                </div>))}
            </div>
        )
    }
}


export default Breakdown;