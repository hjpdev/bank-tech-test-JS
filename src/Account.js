export default class Account {
  constructor(initialBalance) {
    this.balance = initialBalance || 0
  }

  getBalance() {
    return this.balance
  }
}
