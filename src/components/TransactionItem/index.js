import './index.css'

const TransactionItem = props => {
  const {eachItem, onDeleteTransaction} = props
  const {id, title, amount, type} = eachItem

  const ondeleteTransaction = () => {
    onDeleteTransaction(id)
  }

  const transactionTypeMap = {
    INCOME: 'Income',
    EXPENSES: 'Expenses',
  }

  const transactionTypeText = transactionTypeMap[type] || type

  return (
    <li className="history-container-alinement">
      <p className="historys-title">{title}</p>
      <p className="historys-amount">Rs {amount}</p>
      <p className="historys-type">{transactionTypeText}</p>
      <button
        type="button"
        className="delete-button"
        onClick={ondeleteTransaction}
        data-testid="delete"
      >
        <img
          className="delete-button-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
