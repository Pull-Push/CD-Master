
#< 1-Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).

def countdown(num):
    cd_list = []
    while num >= 0:
        cd_list.append(num)
        num -= 1
    print(cd_list)

#countdown(10)


#< 2-Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.

def print_And_Return(list):
    print(list[0])
    return list[1]

#print(print_and_return([45,32]))




#< 3-First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.

def f_Plus_L(list):
    return list[0] + len(list)
#print(f_plus_l([10,5,46,85,32]))


#< 4-Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False

def val_Great_Sec(value):
    org_list = value
    new_list = []
    if len(org_list)< 2:
        return False
    else:
        for x in range(len(org_list)):
            if org_list[x] > org_list[1]:
                new_list.append(org_list[x])
        print(len(new_list))
        return new_list
            
print(val_Great_Sec([10,50,36,78,65,12,85,78,98]))

#< 5-This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.

