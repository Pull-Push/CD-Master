from bank_account import SavingsBankAccount
from bank_account import CheckingBankAccount

class User:
    is_rewards_member = False
    
    def __init__(self,first_name,last_name,email,age):
        
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        self.savings = SavingsBankAccount()
        self.checking = CheckingBankAccount()

    
    def display_info(self):
        print("First Name:", self.first_name)
        print("Last Name:", self.last_name)
        print("Email:", self.email)
        print("Age:", self.age)
        print("Rewards Memeber Status:" ,self.is_rewards_member)
        print("Gold Card Point:", self.gold_card_points)
        print("-----")

    def enroll(self):
        print("Rewards Status")
        if self.is_rewards_member == True:
            print("User Already A Member")
            return False
        else:
            print("Welcome To The Family,", self.first_name)
            self.is_rewards_member = True
            self.gold_card_points = 200
            print("-----")
            self.display_info()
            return True
    
    def spend_points(self, amount):
        if self.gold_card_points > amount:
            self.gold_card_points = self.gold_card_points - amount
            print("Your New Balance Is:", self.gold_card_points)
        else:
            print("You Don't Have Enough Points")
            print("Balance:", self.gold_card_points)

    def make_deposit(self,account = "", amount = 0):
        if account == "savings":
            self.savings.deposit(amount)
        elif account == "checking":
            self.checking.deposit(amount)
        else:
            print("Please Specify an Account")
    
    
    def make_withdrawl(self,account = "", amount = 0):
        if account == "savings":
            self.savings.withdraw(amount)
        elif account == "checking":
            self.checking.withdraw(amount)
        else:
            print("Please Specify an Account")

    def display_user_balance(self):
        self.checking.display_account_info()
        self.savings.display_account_info()

    def transfer_money(self, amount, other_user):
        pass
        self.checking.balance -= amount
        other_user.checking.balance += amount

EBrock = User("Eddie", "Brock", "DieSpiderMan@gmail.com", 27)
WFisk = User("Wilson","Fisk", "DontCallMeKingpin@Fisk.com",45)
PParker = User("Peter","Parker","PParker@dailybugle.com",24)

PParker.make_deposit("savings",500)
PParker.make_deposit('checking', 1000)
PParker.display_user_balance()

PParker.transfer_money(200, WFisk)

WFisk.display_user_balance()
PParker.display_user_balance()