import React from 'react'

const MakeTransaction = () => {
    return (
        <div>
            <h3>Make Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                           id="description" 
                           placeholder="e.g. Salary, Food, Rent" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input type="number" 
                            id="amount" 
                            placeholder="e.g.'+' for Income and '-' for Expense"/>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default MakeTransaction
