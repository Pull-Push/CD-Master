class BankAccount:
    #< class attributes
    bank_name = "First National Bank"
    #< new class attribtue - a list of all the accounts
    all_accounts = []

    def __init__(self, int_rate,balance) -> None:
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
    #< class method to change the name of the bank
    @classmethod
    def change_bank_name(cls,name):
        cls.bank_name = name
    #< class method to get the balance of all accounts
    @classmethod
    def all_balances(cls):
        sum = 0
        #< we use cls to refer to the class
        for account in cls.all_accounts:
            sum += account.balance
        return sum
print(BankAccount.all_balances())
EQUIGS = BankAccount(1.5, 10000)

JSOKOL = BankAccount(2.0, 5000)
JSOKOL.bank_name = "Toronto Dominion"
print(JSOKOL.balance)
print(JSOKOL.bank_name)
print(EQUIGS.bank_name)

print(BankAccount.all_balances())


