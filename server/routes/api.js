const express = require('express')
const router = express.Router()

const Transaction = require('../model/Transaction')


router.get('/transactions', function (req, res) {
    Transaction.find({}).exec(function (err, transactions) {
        res.send(transactions)
    })
})

router.post('/transaction', function(req, res){  
    let newTransaction = req.body
    let t1 = new Transaction(newTransaction)
    t1.save(function(){
        Transaction.find({}, function(err, transactions){
            res.send(transactions)
        })
    })
})

router.delete('/transaction', function(req, res){
    let id = req.body.id
    Transaction.deleteOne({_id: id}, function(err, transaction){
        res.send(`The Transaction ${id} was deleted successfully`)
   })
})








module.exports = router