def printaTexto(i):

    if(i % 2 == 0):
        print("   if x == {}:\n        print(\"even\")".format(i))
    else:
        print("   if x == {}:\n        print(\"odd\")".format(i))

def    printaBase():
    print("if __name__ == \"__main__\": \n")

if __name__ == "__main__":
    x = input("Enter a number: ")
    printaBase()
    for i in range(int(x) + 1):
        printaTexto(i)