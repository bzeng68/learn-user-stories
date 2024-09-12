// THis is a type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accounts
 */
class Bank {
    // This is a private field that holds all accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * This method checks if an account with the given accounr number exists
     * @param {string} -- accountNumber  The account number to check
     * @returns {BankAccount | undefined} -- The account if it exists, otherwise undefined
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    /**
     * This method creates a new account with the given name, age, and account number
     * @param {string} -- name The name of the account holder
     * @param {number} -- age The age of the account holder
     * @param {string} -- accountNumber The account number of the account holder
     * @returns {BankAccount} -- The new bank account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if (isAccExists != null) {
            throw new Error('Account already exists');
        }
        const newAccount: BankAccount = { name, age, accountNumber, balance: 0 };
        this.accounts.push(newAccount);
        return newAccount;
    }
}

export default Bank;