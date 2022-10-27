

my_name = "Jeffrey Sokol"

for x in my_name:
    print(x)


my_list = ["abc",123,"xyz",456]
for i in range(0,len(my_list)):
    print(i, my_list[i])

for v in my_list:
    print(v)

count = 0
while count <= 5:
    print('looping =', count)
    count += 1

y= 10
while y > 0:
    print(y)
    y =y-1
else:
    print("this is the final statement")