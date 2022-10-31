class User:
    def __init__(self, first, last, age, email, height) -> None:
        self.first_name = first
        self.last_name  = last
        self.age = age
        self.email = email
        self.height = height
    def greeting(self):
        print(f"Hello {self.first_name} {self.last_name}, it's good to see you again.")

person = User("Jeff", "Sokol",38,"Jsokol@email.com","74Inches")
print(person.last_name)

person.greeting()

person2 = User("Erin","Sokol",34,"EQUIGS!@gmail.com","71Inches")
person2.greeting()

print(person2.email)
