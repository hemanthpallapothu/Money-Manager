import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoriesList = []

class MoneyManager extends Component {
  state = {
    historiesList: initialHistoriesList,
    title: '',
    amount: '',
    type: 'Income',
    yourBalance: 0,
    yourIncome: 0,
    yourExpenses: 0,
  }

  onDeleteTransaction = id => {
    this.setState(
      prevState => ({
        historiesList: prevState.historiesList.filter(
          eachItem => eachItem.id !== id,
        ),
      }),
      this.onMoneyUpdateDetails,
    )
  }

  onChangeInputTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeInputType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransactions = {
      id: uuidv4(),
      title,
      amount: Number(amount),
      type,
    }

    this.setState(
      prevState => ({
        historiesList: [...prevState.historiesList, newTransactions],
        title: '',
        amount: '',
        type: 'Income',
      }),
      () => {
        this.onMoneyUpdateDetails()
      },
    )
  }

  onMoneyUpdateDetails = () => {
    const {historiesList} = this.state
    let income = 0
    let expenses = 0
    historiesList.forEach(eachItem => {
      if (eachItem.type === 'INCOME') {
        income += eachItem.amount
      } else {
        expenses += eachItem.amount
      }
    })
    const balance = income - expenses
    this.setState({
      yourBalance: balance,
      yourIncome: income,
      yourExpenses: expenses,
    })
  }

  render() {
    const {
      title,
      amount,
      historiesList,
      yourBalance,
      yourIncome,
      yourExpenses,
    } = this.state

    return (
      <>
        <div className="bg-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="user-quote">
            Welcome back to your{' '}
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-alinement">
          <MoneyDetails
            yourBalance={yourBalance}
            yourIncome={yourIncome}
            yourExpenses={yourExpenses}
          />
        </ul>
        <div className="bottom-section-alinement">
          <div className="add-transaction-container">
            <h1 className="add-transaction-text">Add Transaction</h1>
            <form>
              <div className="input-container">
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={this.onChangeInputTitle}
                  placeholder="TITLE"
                  className="input-element"
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={this.onChangeInputAmount}
                  placeholder="AMOUNT"
                  className="input-element"
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="amount">
                  TYPE
                </label>

                <select
                  onChange={this.onChangeInputType}
                  className="input-element"
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option key={eachItem.optionId} value={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={this.onAddTransaction}
                type="submit"
                className="form-submit-button"
              >
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-title">History</h1>
            <ul className="historys-container">
              <li className="histories-container-alinement">
                <p className="historys-title-item">Title</p>
                <p className="historys-amount-item">Amount</p>
                <p className="historys-type-item">Type</p>
              </li>

              {historiesList.map(eachItem => (
                <TransactionItem
                  onDeleteTransaction={this.onDeleteTransaction}
                  key={eachItem.id}
                  eachItem={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager
