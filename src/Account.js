export default class Account {
  constructor(initialBalance) {
    this.balance = initialBalance || 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    if(amount > this.getBalance()) { 
        throw new Error(`Amount: ${amount}, is greater than balance: ${this.getBalance()}`)
    } else {
      this.balance -= amount
    }
  }
}
