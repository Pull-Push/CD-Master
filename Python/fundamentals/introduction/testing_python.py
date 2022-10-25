import random

print('Welcome to Python!')

print('This is a loop printing 5 times')
for x in range(1, 6):
    print(f'x is: {x}')

weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
day = random.choice(weekdays)

print(f'Today is: {day}')

if day == 'Monday':
    print('It will be a long week!')
elif(day == 'Friday'):
    print('Woohoo, time for the weekend!')
else:
    print('Not quite there yet.')

name = "Jeff"
num = 42
print("Hello my name is", num)

#print("Hello my name is "+num)
class empty_class:
    pass

# for x in my_string:
#     pass
#above code does not work
#throws error saying not defined

first_name = "Jeff"
last_name = "Sokol"
age = 38

print(f"Hello my name is {first_name} {last_name} and I am {age} years old")
print("My name is {} {} and I am {} years old".format(first_name,last_name,age))
print("My name is {} {} and I am {} years old".format(age, first_name, last_name))