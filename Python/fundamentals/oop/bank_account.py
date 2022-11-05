class SavingsBankAccount:
    def __init__(self)  -> None:
        self.balance = 0
        self.interest = 0.01


    def display_account_info(self):
        print("Your Savings Balance is $", round(self.balance,2))
        print("-----")
        return self
    
    def deposit(self, amount):
        self.balance += amount
        self.display_account_info()
        return self

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
            self.display_account_info()
            return self
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance  -= 5
            self.display_account_info()
            return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.interest
            self.display_account_info()
            return self

class CheckingBankAccount:
    def __init__(self)  -> None:
        self.balance = 0

    def display_account_info(self):
        print("Your Checking Balance is $", round(self.balance,2))
        print("-----")
        return self
    
    def deposit(self, amount):
        self.balance += amount
        self.display_account_info()
        return self

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
            self.display_account_info()
            return self
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance  -= 5
            self.display_account_info()
            return self



# user1 = BankAccount()
# user2 = BankAccount(5000)


# #user1.deposit(200).deposit(1000).deposit(1700).withdraw(500).yield_interest()
# user2.deposit(108.50).deposit(10164.00).withdraw(7045.87).withdraw(7000.65).withdraw(501).withdraw(878).yield_interest()