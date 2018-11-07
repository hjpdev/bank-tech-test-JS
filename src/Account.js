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
    this.balance -= amount
  }
}
