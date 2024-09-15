import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {yourBalance, yourIncome, yourExpenses} = this.props
    return (
      <>
        <div className="balance-bg-container">
          <img
            className="balance-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div>
            <p className="balance-text">Your Balance </p>
            <p className="balance-amount" data-testid="balanceAmount">
              Rs {yourBalance}
            </p>
          </div>
        </div>
        <div className="income-bg-container">
          <img
            className="income-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div>
            <p className="income-text">Your Income </p>
            <p className="income-amount" data-testid="incomeAmount">
              Rs {yourIncome}
            </p>
          </div>
        </div>
        <div className="expenses-bg-container">
          <img
            className="expenses-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div>
            <p className="expenses-text">Your Expenses </p>
            <p className="expenses-amount" data-testid="expensesAmount">
              Rs {yourExpenses}
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
