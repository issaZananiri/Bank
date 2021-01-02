import React, { Component } from 'react';

class Transaction extends Component{

    removeFromArray = () => {
        let id = this.props.transaction._id
        this.props.deleteFromArray(id)
    }
    render(){
        let transaction = this.props.transaction
        return ( <div>
                {transaction.amount} - {transaction.vendor}, {transaction.category}
                <button id="delete" onClick={this.removeFromArray}>Delete</button>
        </div>
        )
    }


}




export default Transaction;