import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    this.deposit(amount)
  }
}