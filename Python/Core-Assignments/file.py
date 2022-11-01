num1 = 42 #Variable Declaration, Numbers
num2 = 2.3 #Variable Declaration, Numbers
boolean = True #Variable Declaration, Boolean
string = 'Hello World' #Variable Declaration, Strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #dictionary initialize
fruit = ('blueberry', 'strawberry', 'banana') #tuple initialize
print(type(fruit)) #log statement, type check, tuple access value
print(pizza_toppings[1]) #log statement, Strings,list access value
pizza_toppings.append('Mushrooms')#list access value, list add value
pizza_toppings.append('Mushrooms')#list access value, list add value
pizza_toppings.append('Mushrooms')#list access value, list add value
print(person['name']) #log statement, Strings, dictionary access value
person['name'] = 'George' #Strings,  dictionary access value,dictionary change value
person['eye_color'] = 'blue' #Strings, dictionary access value,dictionary change value,dictionary add value
print(fruit[2]) #log statement,Strings, tuple access value

if num1 > 45: #if conditional
    print("It's greater") #log statement,Strings
else: #else conditional
    print("It's lower") #log statement,Strings

if len(string) < 5: #type check, if conditional
    print("It's a short word!") #log statement,Strings
elif len(string) > 15: #type check, elif condidtional
    print("It's a long word!") #log statement,Strings
else: #else condidional
    print("Just right!") #log statement,Strings

for x in range(5): #forloop start
    print(x) #log statement
for x in range(2,5): #forloop start
    print(x) #log statement
for x in range(2,10,3): #forloop start
    print(x) #log statement
x = 0 #Numbers
while(x < 5):
    print(x) #log statement
    x += 1

pizza_toppings.pop() #list access value, list delete value
pizza_toppings.pop(1) #list access value, delete value

print(person) #log statement, dictionary access value
person.pop('eye_color')#dictionary access value,dictionary delete value
print(person) #log statement,dictionary access value

for topping in pizza_toppings: #list access value, for loop start
    if topping == 'Pepperoni': #if conditional
        continue
    print('After 1st if statement') #log statement,Strings
    if topping == 'Olives': #if conditional
        break

def print_hello_ten_times():
    for num in range(10): #for loop start
        print('Hello') #log statement,Strings

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x): #for loop start
        print('Hello') #log statement,Strings

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x): #for loop start
        print('Hello') #log statement,Strings

print_hello_x_or_ten_times() 
print_hello_x_or_ten_times(4) 


"""  #multilinecomment
Bonus section
""" #multilinecomment 

# print(num3) #log statement, single line comment
# num3 = 72 #Variable Declaration, single line comment
# fruit[0] = 'cranberry' #single line comment
# print(person['favorite_team']) #log statement, single line comment
# print(pizza_toppings[7]) #log statement, single line comment
#   print(boolean) #log statement, single line comment, Boolean
# fruit.append('raspberry') #single line comment
# fruit.pop(1) #single line comment