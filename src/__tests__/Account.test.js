import Account from '../Account'

describe('Account', () => {
  let acc
  beforeEach(() => {
    acc = new Account()
  }) 
  
  it('Has a balance of 0 by default', () => {
    expect(acc.getBalance()).toEqual(0)
  })

  it('Can be created with money deposited', () => {
    let acc2 = new Account(54)
    expect(acc2.getBalance()).toEqual(54)
  })

  describe('#deposit', () => {
    it('Adds the deposited amount to balance', () => {
      acc.deposit(47)
      expect(acc.getBalance()).toEqual(47)
    })
  })
})
