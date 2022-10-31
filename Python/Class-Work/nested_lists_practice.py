
#! Looping through nested Dictionaries, Lists, and Tuples

#<Looping Through a dictionary of dictionaries
people = {
    "person1":{"name":"Jeff", "age":"38", "sex":"Male"},
    "person2":{"name":"Erin", "age":"34", "sex":"Female"},
    "person3":{"name":"Joe", "age":"37", "sex":"Male"},
    "person4":{"name":"Reen", "age":"36", "sex":"Male"},
    "person5":{"name":"Jamie", "age":"30", "sex":"Female "},
    "person6":{"name":"Savannah", "age":"1", "sex":"Female"},
    "person7":{"name":"Tom", "age":"62", "sex": "Male"},
    "person8":{"name":"Val", "age":"61", "sex":"Female"}
}
#todo access data without looping - MANUALLY
#!   OuterDict  InnerDict       key
# print(people   ["person1"]   ["name"])
#? WIll print ALL DICTIONARY DATA
# for key in people:
    # print(people)

#? Loops thrrough all Dictionary IDs (person1,person2.....)
# for key in people:
    # print(key)

#? Loops through EACH Dictionary one by one and prints Key Value Pair
# for key in people:
    # print(people[key])

#? Prints INNER dictionary ID then prints secondary key (secondary key = name, age, sex)
# for key in people:
#     print('ID:', key)
#     for secondaryKey in people[key]:
#         print(secondaryKey, ":", people[key][secondaryKey])

#! EASIER WAY TO LOOP THROUGH DICTIONARY OF DICTIONARIES
# for id, dictionary in people.items():
    # print("ID :", id)
    # for key in dictionary:
        # print(key, ":", dictionary[key])




# #<Looping through a LIST OF DICTIONARIES

people2 = [
    {"id": "501", "name": "Jeff", "age":"38", "sex":"Male"},
    {"id": "01", "name": "Erin", "age":"34", "sex":"Female"},
    {"id": "10", "name": "Joe", "age":"37", "sex":"male"}
]

# #? Prints individual dictionaries
# for dictionary in people2:
#     print(dictionary)

# #? Prints all key names for 1st Dictionary then moves to 2nd and 3rd
# for dictionary in people2:
#     for key in dictionary:
#         print(key)

# #? Prints all Key Value pairs for each dictionary 1 by 1
# for dictionary in people2:
#     #! inside the list, looking at dictionary data
#     for key in dictionary:
#         #! inside each dictionary looking at keys
#         print(key,":", dictionary[key])


# #< Looping through SINGLE dictionary items
# #TODO REMEMBER!! Iterator assignment name DOES NOT MATTER. Could be called anything but have it make sense to make life easier

# ratings1 ={
#     "Reen": (2,1,2,3,2,3),
#     "Ryp":(4,2,1,3,4)
# }
# #? Will only print out KEYS OF DICTIONARY
# for key in ratings1:
#     print(key)

# #? Will only print VALUES OF EACH KEY
# #! MUST USE BRACKET NOTATION
# for key in ratings1:
#     print(ratings1[key])

# #? PRINT KEY AND VALUE
# for key in ratings1:
#     print(key, 'grades:', ratings1[key])


