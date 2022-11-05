class User:
    is_rewards_member = False
    
    def __init__(self,first_name,last_name,email,age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    
    def display_info(self):
        print("First Name:", self.first_name)
        print("Last Name:", self.last_name)
        print("Email:", self.email)
        print("Age:", self.age)
        print("Rewards Memeber Status:" ,self.is_rewards_member)
        print("Gold Card Point:", self.gold_card_points)
        print("-----")
        return self

    def enroll(self):
        print("Rewards Status")
        if self.is_rewards_member == True:
            print("User Already A Member")
            return self
        else:
            print("Welcome To The Family,", self.first_name)
            self.is_rewards_member = True
            self.gold_card_points = 200
            print("-----")
            self.display_info()
            return self

    def spend_points(self, amount):
        if self.gold_card_points > amount:
            self.gold_card_points = self.gold_card_points - amount
            print("Your New Balance Is:", self.gold_card_points)
            return self
        else:
            print("You Don't Have Enough Points")
            print("Balance:", self.gold_card_points)
            return self

user1 = User("Peter","Parker","PParker@dailybugle.com",24)
user2 = User("Eddie", "Brock", "DieSpiderMan@gmail.com", 27)
user3 = User("Wilson","Fisk", "DontCallMeKingpin@Fisk.com", 45)




user1.display_info().enroll().spend_points(50).display_info()
# user2.display_info()
# user3.display_info()

#user1.enroll()
# print(user1.enroll())


#user1.spend_points(20)
#user1.spend_points(500)
