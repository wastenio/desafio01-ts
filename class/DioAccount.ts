export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Deposito de ${amount} realizado com sucesso! Saldo atual é de ${this.balance}`)
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if(this.balance >= amount){
        this.balance -= amount
        console.log(`Saque de ${amount} realizado com sucesso! Saldo atual é de ${this.balance}`)
      } else {
        console.log('Saldo insuficiente')
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
