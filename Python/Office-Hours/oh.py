def digi(num):
    if num > 0 or num == 0:
        x = len(str(num))
    elif num < 0:
        x = len(str(num))-1
    print(x)

digi(-57)