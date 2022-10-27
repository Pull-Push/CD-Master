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
#! Throws error. Can not add number to a string for math operation

class empty_class:
    pass

# for x in my_string:
#     pass
#! above code does not work
#! throws error saying not defined

first_name = "Jeff"
last_name = "Sokol"
age = 38

print(f"Hello my name is {first_name} {last_name} and I am {age} years old")
print("My name is {} {} and I am {} years old".format(first_name,last_name,age))
print("My name is {} {} and I am {} years old".format(age, first_name, last_name)) 

fruits = ['apple', 'banana','orange','strawberry','tangerine','watermelon','cherry','strawberry','blackberry']
vegetables = ['lettuce','cucumber','carrots']

fruits_and_vegetables = fruits + vegetables
print(fruits_and_vegetables)

salad = 3 * vegetables
print(salad)
print(fruits)
print(fruits[2])
fruits[3] = "pears"

main_fruit = fruits[0]

nums = [1,2,3,4,5]
nums.append(99)
print(nums)

words = ['Start','going','till','the','end']

#< Sub-ranges (portions) of the list 
print(words[1:])    #< Starts at 1 and goes to the end
print(words[:4])    #<Starts at 0 and goes up to 4 - DOES NOT INCLUDE THE ENDING INDEX!!
print(words[2:4])   #<Starts at 2 and ends at 4

#< Making a copy of the list
copy_of_words = words[:]
copy_of_words.append('dojo')    #< only appends to the copy
print(copy_of_words)
print(words)

#< Python Functions for Seqences
my_name = "Jeffrey Scott Sokol"
print(my_name)
print(len(my_name))  #<  prints the amount of values in sequence
print(max(my_name))  #<  prints-the max value(last letter/highest number)
print(min(my_name))  #<  prints the min value(first letter/lowest number)
print(sorted(my_name))

print(len(fruits))  #<  prints the amount of values in sequence
print(max(fruits))  #<  prints-the max value(last letter/highest number)
print(min(fruits))  #<  prints the min value(first letter/lowest number)
print(sorted(fruits))   #<  prints the sequence in numerical or alphabetical order

print(fruits.index("orange"))
fruits_and_vegetables.sort()
print(fruits_and_vegetables)

y = 12
if y > 50:
    print("bigger than 50")
else:
    print("smaller than 50")
    # because x is not greater than 50, the second print statement is the only one that will execute
    
x = 55
if x > 10:
    print("bigger than 10")
elif x > 50:
    print("bigger than 50")
else:
    print("smaller than 10")
# even though x is greater than 10 and 50, the first true statement is the only one that will execute, so we will only see 'bigger than 10'
    
if x < 10:
    print("smaller than 10")
# nothing happens, because the statement is false   