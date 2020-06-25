import React, { useState, useContext } from 'react';

// Importing Global Context
import { GlobalContext } from '../Context/GlobalState'

const MakeTransaction = () => {
    
    const [ description, setDescription ] = useState();
    const [ transactionAmount, setTransactionAmount ] = useState();
    
    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }
    
    
    return (
        <div>
            <h3>Make Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                           id="description" 
                           placeholder="e.g. Salary, Food, Rent" 
                           value={description} 
                           onChange={(e) => setDescription(e.target.value) }
                           required = "required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input type="number" 
                            id="amount" 
                            placeholder="e.g.'+' for Income and '-' for Expense"
                            value={transactionAmount} 
                            onChange={(e) => setTransactionAmount(e.target.value) }  
                            required = "required"                  
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default MakeTransaction
