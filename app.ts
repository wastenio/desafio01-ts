import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Wastenio', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount.getID())
console.log(peopleAccount.getBalance())
console.log(peopleAccount.getName())
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan(100)
console.log(companyAccount.getBalance())

const specialAccount: SpecialAccount = new SpecialAccount('DIO', 30)
console.log(specialAccount)
specialAccount.getLoan(100)
console.log(specialAccount.getBalance())