def two_fer(name):
    if name != "":
        print("One for %s, one for me." % name)
    else:
        print("One for you, one for me.")
    

if __name__ =="__main__":
    name = "Alice"
    two_fer(name)

    name = ""
    two_fer(name)
