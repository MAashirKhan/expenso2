import React, { useContext } from 'react'

//Import The Global Context
import { GlobalContext } from '../Context/GlobalState'

//Import Transaction
import Transaction from './Transaction';

const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
             <h3>Transaction History</h3>
             <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
                
             </ul>
        </div>
    )
}

export default TransactionHistory
