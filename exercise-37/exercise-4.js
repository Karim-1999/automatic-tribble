class BankAccount {
    constructor(importo) {
        this.importo = importo
    }
    deposit(addFound){
        return this.importo += addFound
    }
    withdraw(removeFound){
        return this.importo -= removeFound
    }
    view(){
        console.log(this.importo)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();